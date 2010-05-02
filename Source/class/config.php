<?php

// Define os dados de configuração para os ambientes de produção e de desenvolvimento
if ($_SERVER["SERVER_NAME"] == 'www.asd.com.br') {
	// Dados de configuração da base de dados
	$sHostName = 'localhost';
	$sUserName = 'root';
	$sPassword = 'root';
	$sDBName   = 'mega';
	// Envio de e-mail
	$sContactEmail = 'fsplets@gmail.com';
} else {
	// Dados de configuração da base de dados
	$sHostName = 'localhost';
	$sUserName = 'root';
	$sPassword = 'root';
	$sDBName   = 'mega';
	// Envio de e-mail
	$sContactEmail = 'fsplets@gmail.com';
}
?>