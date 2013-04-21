<?php
	$dbname = 'cucumbr';
	$dbuser = 'root';
	$dbpass = 'xaVmN1BXKaMqzM3cTFr9';
	$dbhost = 'localhost';
	$dbid = mysql_pconnect($dbhost, $dbuser, $dbpass) or die(mysql_error());
	mysql_select_db($dbname, $dbid);
?>