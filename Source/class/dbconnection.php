<?php
  $iConnID     = @mysql_pconnect ($sHostName, $sUserName, $sPassword); // TODO: LOG or die ("Could not connect");
  $iDBSelected = @mysql_select_db($sDBName, $iConnID);
?>