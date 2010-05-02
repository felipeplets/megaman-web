// Objeto principal do jogo
var Mega = {};

// Objetos de animação
Mega.Animations = {};

// Dados do ambiente do jogo
Mega.Playground = {};
// Largura do ambiente
Mega.Playground.Width   = 600;
// Altura do ambiente
Mega.Playground.Height  = 300;

// Dados referentes à sessão do usuário
Mega.User = {};
// Pontos do usuário
Mega.User.Points = 0;
// Energia do usuário
Mega.User.Energy = 20;
// Vidas do usuário
Mega.User.Life = 5;

// Inicia o jogo
Mega.Start = function() {
  // Inicia o jogo e define a função de callback que será chamada após o inicio do jogo
  $.playground().startGame(Mega.Start_cb);  
}

// Função que faz a preparação de iniciação do jogo
Mega.Start_cb = function() {
  
  // Define a função que verifica qual foi a tecla pressionada
  $(document).keydown(Window_OnKeydown);

  // Remove o elemento de introdução
  $("#intro").remove();
    
  $("#background").css("background-repeat", "repeat-x");
  $("#foreground").css("background-repeat", "repeat-x");
}


// Cria uma animação
Mega.CreateAnimation = function (PsImageURL, PiNumberOfFrame, PiDelta, PiRate, PeType) {
  // Cria a animação e retorna o objeto da animação
  return new $.gameQuery.Animation({ imageURL: PsImageURL, numberOfFrame: PiNumberOfFrame, delta: PiDelta, rate: PiRate, type: PeType});
}

// Criar as animações do jogo
Mega.CreateAnimations = function () {

  // Fundo do jogo
  Mega.Animations.BackGround = Mega.CreateAnimation("Common/Images/bkg0.jpg");
  
  // Cactos do jogo
  Mega.Animations.ForeGround = Mega.CreateAnimation("Common/Images/bkg1.png");

  // Player do jogo 
  Mega.Animations.Player    = Mega.CreateAnimation("Common/Images/player.png",    2, 54, 100, $.gameQuery.ANIMATION_HORIZONTAL);

  // Inimigo
  Mega.Animations.Enemy     = Mega.CreateAnimation("Common/Images/en_fly.png",    4, 40, 60 , $.gameQuery.ANIMATION_HORIZONTAL);

  // Explosão
  Mega.Animations.Explosion = Mega.CreateAnimation("Common/Images/exp.png",       5, 64, 60 , $.gameQuery.ANIMATION_HORIZONTAL | $.gameQuery.ANIMATION_CALLBACK);

  // Arma do jogo
  Mega.Animations.Gun       = Mega.CreateAnimation("Common/Images/gun_laser.png", 9, 44, 60 , $.gameQuery.ANIMATION_VERTICAL   | $.gameQuery.ANIMATION_CALLBACK);

}

// Cria os inimigos
Mega.CreateEnemies = function () {

  // Cria o nome do inimigo
  var name = "en_" + Math.ceil(Math.random()*1000);
    
  // Adiciona o inimigo ao jogo
  $.playground().addSprite(name, {animation: Mega.Animations.Enemy, 
                                  posx     : Mega.Playground.Width, 
                                  posy     : Math.random() * Mega.Playground.Height,
                                  width    : 40,
                                  height   : 46});

  // Adiciona a classe enemy aos enimigos para detecção de colisão
  $("#"+name).addClass("enemy");
  
}