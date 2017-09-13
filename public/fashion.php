<?php

//header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "kabeer", "getmod");
$result = $conn->query("SELECT * FROM fashions");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);

$result->free();
$conn->close();
?>
