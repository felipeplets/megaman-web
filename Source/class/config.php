<?php

// Define os dados de configura��o para os ambientes de produ��o e de desenvolvimento
if ($_SERVER["SERVER_NAME"] == 'www.asd.com.br') {
	// Dados de configura��o da base de dados
	$sHostName = 'localhost';
	$sUserName = 'root';
	$sPassword = 'root';
	$sDBName   = 'mega';
	// Envio de e-mail
	$sContactEmail = 'fsplets@gmail.com';
} else {
	// Dados de configura��o da base de dados
	$sHostName = 'localhost';
	$sUserName = 'root';
	$sPassword = 'root';
	$sDBName   = 'mega';
	// Envio de e-mail
	$sContactEmail = 'fsplets@gmail.com';
}
?>