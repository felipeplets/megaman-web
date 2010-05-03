<?php
    // Dados de configuração do sistema
	require_once('class/config.php');
	// Realiza conexão com a base de dados
	//require_once('class/dbconnection.php');
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
		case 'GETSCORELIST':
          // Inserir o código para buscar no banco
			$oAjax->result = array(array("KEN", "500"),
			                  array("RYU", "450"),
							  array("BLK", "400"),
							  array("FLP", "350"),
							  array("FEL", "300"),
							  array("JUL", "250"),
							  array("HEN", "200"),
							  array("CON", "150"),
							  array("PAC", "100"),
							  array("PLT", "50"));
		break;
		/* Insere o Score no banco */
		case 'SETSCORE':
			$sUser   = $_GET['user'];
			$sScore  = $_GET['score'];
			// Inserir o código para inserir no banco
			$oAjax->result = true;
		break;
	}
	print(json_encode($oAjax));
	// Fecha conexão
	//mysql_close($iConnID);
?>