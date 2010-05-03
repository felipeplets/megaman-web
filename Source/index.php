<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xml:lang="pt-br" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <title>Megaman Desert Conquer</title>
        <link type="text/css" href="Common/Styles/default.css" rel="stylesheet" />
    </head>
    <body>
        <div id="pnlMain">
        <h1>Megaman Desert Conquer</h1>
        <br/>
        <div id="pnlRegisterScore">
          <label for="edtUserName">Usuário: </label><input id="edtUserName" maxlength="3" /> (3 letras) <br />
          <span id="lblFinalScor"></span><br />
          <button id="btnScore" type="button">Registrar</button>
        </div>
        <div id="pnlRegisterScoreList"><ul></ul></div>
        <div id="playground">
            <div id="intro">
                <div id="loadingBar">
                </div>
                <br/>
                <a id="btnStart"><img src="Common/Images/start.gif" border="0" title="Start game" alt="" /></a>
            </div>
        </div>
        <br/>
        <div id="debug">
            Controles: <b>Setas do teclado para mover-se e X para atirar</b>
            <br/>
            Versão 0.3 
            <br/>
            <a href="http://www.plets.com.br/">Felipe "Plets" dos Santos</a>
            <br/>
            Juliano Pacheco
            <br/>
            Henrique Schuster
            <br/>
            Feito utilizando: <a href="http://gamequery.onaluf.org/">gameQuery</a>
            e <a href="http://jquery.com/">jQuery</a>
        </div>
        <script type="text/javascript" src="Common/Scripts/jquery.js">
        </script>
        <script type="text/javascript" src="Common/Scripts/jquery.gamequery.js">
        </script>
        <script type="text/javascript" src="Common/Scripts/mega.js">
        </script>
        <script type="text/javascript" src="Common/Scripts/default.js">
        </script>
    </body>
</html>
