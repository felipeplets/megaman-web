/*************************************
* Megaman Desert Conquer 0.3
*
* Colaboradores:
*
*       Felipe "Plets" dos Santos - http://www.plets.com.br/
*       Juliano Pacheco
*       Henrique Schuster
*
* Data: 02/05/2010
*
* Dependências: 
*
*       jQuery 1.4
*       GameQuery 0.4
*
* TODO: 
*
*       Correções:
*              - A figura escura dos cactos deve ficar na frente dos inimigos
*              - O tiro as vezes não aparece
*
*       Prioritário:
*              - Vidas
*              - Colisão do mega com os inimigos
*
*       Não prioritário:
*              - Adicionar mais tipos de inimigos
*              - Alguns inimigos que atiram
*              - Fases
*              - Chefões
*              - Escolha de personagem
*              - Diferentes tipos de tiros
*              - Diferentes tipos de fases, com ou sem vôo
*
**************************************/

var playerPosX = 50;
var playerPosY = 75; 
var playerSpeed=10;
var playerHSpeed=0; 
var playerVSpeed=0; 
var playerFriction=1.1;
var playerFire=false;
var enemyMove=false;

var BkgScroll = 0;
var gameTime = 0;

var ShowDebug=false;
var DebugStr='';
var DebugFPScnt=0;
var DebugFPS=0;

// Registra o evento que será disparado quando a página terminar de carregar todos os recursos
$(document).ready(Window_OnLoad);

// Função chamada quando o documento termina de ser carregado
function Window_OnLoad() {

  // Cria todas animações do jogo
  Mega.CreateAnimations();

  // Define o ambiente do jogo
  $("#playground").playground({height: Mega.Playground.Height, width: Mega.Playground.Width, refreshRate: 40})
  
                  // Adiciona o background ao ambiente
                  .addSprite("background", 
                            {height: 300,
						     width: 600,
                             animation : Mega.Animations.BackGround})

                  // Adiciona o player ao ambiente
                  .addSprite("player",
					  	     {posx: playerPosX,
						     posy: playerPosY,
						     height: 50,
						     width: 54,

						     animation: Mega.Animations.Player})

                  // Adiciona o laser ao ambiente
                  .addSprite("gun_laser",
						     {posx: playerPosX,
						     posy: playerPosY,
						     height: 44,
						     width: 640,
						     animation: Mega.Animations.Gun})

                  // Adiciona o foreground ao ambiente
                  .addSprite("foreground", 
                            {height: 300,
						     width: 600,
                             animation : Mega.Animations.ForeGround})
                             
                             .addSprite("points", { 
                                  posx     : Mega.Playground.Width - 120, 
                                  posy     : 0,
                                  width    : 120,
                                  height   : 25})
							.addSprite("life", { 
                                  posx     : Mega.Playground.Width - 320, 
                                  posy     : 0,
                                  width    : 80,
                                  height   : 25})
							 .addSprite("energy", { 
                                  posx     : Mega.Playground.Width - 230, 
                                  posy     : 0,
                                  width    : 100,
                                  height   : 25});;

  $("#points").text("Pontos: " + Mega.User.Points);
  $("#points").css("color", "#FFF");
  $("#points").css("background-color", "#333");
  $("#points").css("text-align", "left");
  $("#points").css("padding", "5px");
     
  $("#life").text("Vidas: " + Mega.User.Life);
  $("#life").css("color", "#FFF");
  $("#life").css("background-color", "#333");
  $("#life").css("text-align", "left");
  $("#life").css("padding", "5px"); 
  
  $("#energy").text("Energia: "+ Mega.User.Energy);
  $("#energy").css("color", "#FFF");
  $("#energy").css("background-color", "#333");
  $("#energy").css("text-align", "left");
  $("#energy").css("padding", "5px");

  // Callback da arma
  $("#gun_laser").setAnimation(Mega.Animations.Gun, gun_cb);

  // Registra o callback principal do jogo
  $.playground().registerCallback(MainLoop, 40);
  
  // Registra o callback de criação de inimigos callback
  $.playground().registerCallback(Mega.CreateEnemies, 1000);
  
  // Adiciona o método ao botão de Start
  $("#btnStart").click(Mega.Start);
  
  // Se deve mostrar o debug então chama a função de atualização
  if (ShowDebug==true) {
    window.setTimeout("fpsloop()",1000);
  }

  // Mostra o botão de Start
  $("#btnStart").css("visibility","visible");
}

function gun_cb(){
  $("#gun_laser").css('visibility','hidden');
  $("#gun_laser").css('top','-90px');
  playerFire = false;
}

// Função que verifica qual tecla o usuário pressionou
function Window_OnKeydown(e) {
  switch(e.keyCode) {
    case 37: // Para a esquerda (a) / 65
      playerHSpeed = -playerSpeed;
    break;
    case 38: //this is up (w) / 87
      playerVSpeed = -playerSpeed;
	break;
	case 39: //this is right (d) / 68
	  playerHSpeed=playerSpeed;
	break;
	case 40: //this is down (s) / 83
	  playerVSpeed=playerSpeed;
	break;
	case 88: //this is fire! (x)
	  if (playerFire == false) {
        $("#gun_laser").css('visibility','visible');
        playerFire = true;
      }
	break;		
  }
}

// Função que atualiza os dados do debug
function fpsloop() {
  DebugFPS = DebugFPScnt;
  DebugFPScnt = 0;
  window.setTimeout("fpsloop()",100);
}

// Função de loop executada a cada 40 milisegundos
function MainLoop(){

    if (Mega.User.Dead) return;

	// Move o fundo
	BkgScroll -= 1;
	gameTime += 1;
	$('#background').css("background-position", (BkgScroll * 4) + "px 0px");
	$('#foreground').css("background-position", (BkgScroll * 7) + "px 0px");
	
	
	// Atualiza a posição dos inimigos
	$(".enemy").each(function(){
		var randomnumber = Math.floor(Math.random() * 16)
		var posx = parseInt($(this).css("left")) - randomnumber;
		$(this).css("left", posx);
		if ((posx + 600) < 0) {
			$(this).remove();
			return;
		}
		enemyMove = true;
	});
	
	// Calcula a posição do player 
	if ((playerPosX >= -10) && (playerPosX <= Mega.Playground.Width + 5) && (playerPosY >= -10) && (playerPosY <= Mega.Playground.Height - 35)) {
		playerPosX += playerHSpeed;
		playerPosY += playerVSpeed;
	}
	if (playerPosX < -10) {
		playerPosX = -10;
	}
	if (playerPosX > Mega.Playground.Width + 5) {
		playerPosX = Mega.Playground.Width + 5;
	}
	if (playerPosY < -10) {
		playerPosY = -10;
	}
	if (playerPosY > Mega.Playground.Height - 35) {
		playerPosY = Mega.Playground.Height - 35;
	}
	if (playerHSpeed != 0) {
		playerHSpeed = playerHSpeed / playerFriction;
	}
	if (playerVSpeed != 0) {
		playerVSpeed = playerVSpeed / playerFriction;
	}
	
	// Atualiza na tela a posição do player
	$("#player").css("top", playerPosY);
	$("#player").css("left", playerPosX);
	
	// Caso o usuário tenha atirado
	if (playerFire) {
		$("#gun_laser").css("top", playerPosY - 5);
		$("#gun_laser").css("left", playerPosX + 40);
		
		// Verifica colisão de tiro com os enimigos
		$("#gun_laser").collision(".enemy").each(function(){
			// Explodir os inimigos:
			if (!this.gameQuery.dead) {
				Mega.User.Points += 50;
				$("#points").text("Pontos: " + Mega.User.Points);
				$(this).setAnimation(Mega.Animations.Explosion, function(toto){
					$(toto).remove();
				});
				$(this).css("width", "64px");
				$(this).css("height", "64px");
				this.gameQuery.posy -= 15;
				$(this).css("top", "" + this.gameQuery.posy + "px");
				this.gameQuery.posx -= 15;
				$(this).css("left", "" + this.gameQuery.posx + "px");
				this.gameQuery.speedx = this.gameQuery.speedx / 3;
				this.gameQuery.speedy = this.gameQuery.speedy / 3;
				this.gameQuery.dead = true;
			}
		});
	}
	
	//verifica a colisão com enimigo se colidir, diminui a energia
	$("#player").collision(".enemy").each(function(){
		Mega.User.Energy = Mega.User.Energy-10;
		$("#energy").text("Energia: " + Mega.User.Energy);
		//aqui deve veriricar a energia do mega man e caso chegar a zero, deve recomeçar a fase se tiver vidas
		if(Mega.User.Energy == 0){
			// Define a energia como 100 novamente
			Mega.User.Energy = 100;
			// Reduz o número de vidas
			Mega.User.Life =  Mega.User.Life-1;
			// Atualiza o contador de vidas na tela
	  	    $("#life").text("Vidas: " + Mega.User.Life);
			// Faz o personagem explodir
       		$("#player").setAnimation(Mega.Animations.Explosion, 
									    function(PoPlayer){ 
										  // remove o mega após a explosão
										  $(PoPlayer).remove();
										  // redefine as posições do personagem
										  playerPosX = 50;
										  playerPosY = 75;
										  // Adiciona novamente o player ao playground
										  $.playground().addSprite("player",
			  		  	                                           { posx: playerPosX,
						                                             posy: playerPosY,
						                                             height: 50,
						                                             width: 54,
						                                             animation: Mega.Animations.Player});
										});
			
			// Se a vida chegou a 0, exibe a página para entrar com o nome para o ranking
			if (Mega.User.Life == 0) Mega.Stop();
		}
	}).each(function(){
        $(this).remove();
		return;
	});
	
  // Mostra os dados de debug
  if (ShowDebug==true) { 
    DebugStr='TIME: <b>'+gameTime+'</b>';
    DebugStr+=' // PLAYER xy:'+Math.floor(playerPosX)+','+Math.floor(playerPosY)+' s:'+Math.floor(playerHSpeed)+','+Math.floor(playerVSpeed);
    DebugStr='FPS:'+DebugFPS+' // '+DebugStr;
    if (playerFire) {
      DebugStr += ' [FIRE] ';
    }
    DebugFPScnt+=1; 				
    $("#debug").html(DebugStr); 
  }
  return false;
}