<?php
require_once("../private/connection.php");


$json_data = array();
$sqlString = 'SELECT * FROM question;';
$recordset = mysql_query($sqlString, $dbid) or die(mysql_error());
while($obj = mysql_fetch_object($recordset)){
	$json_data[] = $obj;
}
header('Content-type: application/json');
echo json_encode($json_data);
?>