<?php
header('Content-Type: application/json');
$conn=mysqli_connect('127.0.0.1','root','root','iassystem','3306');
$sql='SET NAMES UTF8';
mysqli_query($conn,$sql);
//require ('common.php');
$sql='SELECT * FROM tanks';
$result=mysqli_query($conn,$sql);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);