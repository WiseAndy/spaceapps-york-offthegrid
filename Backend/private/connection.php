<?php
	$dbname = 'cumcumbr';
	$dbuser = 'otguser';
	$dbpass = 'password';
	$dbhost = 'localhost';
	$dbid = mysql_pconnect($dbhost, $dbuser, $dbpass) or die(mysql_error());
	mysql_select_db($dbname, $dbid);
?>