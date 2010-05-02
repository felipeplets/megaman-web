<?php
    // Dados de configuração do sistema
	require_once('class/config.php');
	// Realiza conexão com a base de dados
	require_once('class/dbconnection.php');
	// Funções genéricas que podem ser utilizadas para auxiliar o desenvolvimento de qualquer aplicação
	require_once('class/public_functions.php');
	// Classe responsável pelos retornos Ajax
	require_once('class/class.ajax.php');
	
	$oAjax = new Ajax;
	session_start();
	
	// Verifica qual o comando que deve executar
	switch (substr($_SERVER['PATH_INFO'], 1))
	{
		/* Recupera os 10 scores mais altos */
		case 'GETSCORE':
          // Inserir o código
			$oAjax->result = [];
		break;
		/* Insere o Score no banco */
		case 'LOGIN':
			$sUser   = $_GET['user'];
			$sScore  = $_GET['score'];
			// Inserir o código
			$oAjax->result = true;
		break;
	}
	print(json_encode($oAjax));
	// Fecha conexão
	mysql_close($iConnID);
?>