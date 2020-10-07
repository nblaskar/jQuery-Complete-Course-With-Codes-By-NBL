<?php

//echo "Hi From PHP";
//echo $_POST['action'];
if($_POST['action']=='getDate'){
    echo date("d-m-y h:m:s A");
}

?>