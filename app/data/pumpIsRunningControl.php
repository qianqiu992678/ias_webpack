<?php
//header('Content-Type: application/json');
//@$pumpName=$_REQUEST['pumpName'] or die('{"code":202,"msg":"pumpName required"}');
@$pumpId=$_REQUEST['pumpId'] or die('{"code":202,"msg":"pumpId required"}');

@$isRunning=$_REQUEST['isRunning'] or die('{"code":202,"msg":"isRunning required"}');
$conn=mysqli_connect('127.0.0.1','root','root','iassystem','3306');
$sql='SET NAMES UTF8';
echo "$pumpId";
echo "$isRunning";
mysqli_query($conn,$sql);
$sql="UPDATE pumps SET isRunning='$isRunning' WHERE pumpId='$pumpId'";
$result=mysqli_query($conn,$sql);
var_dump($result);