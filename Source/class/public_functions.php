<?php
function varDumpAll() {
  echo('<pre>');
  $iNumArgs = func_num_args();
  $aArgList = func_get_args();
  for ($i = 0; $i < $iNumArgs; $i++) {
    var_dump($aArgList[$i]);
  }
  echo('</pre>');
}
?>