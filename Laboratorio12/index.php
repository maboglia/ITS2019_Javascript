<?php

$username = isset($_GET['username'])? $_GET['username'] : "hello";


if ($username != "hello"){
    echo "HELLO ".$username;
    echo "<img src='img/".$username.".jpg'>";
}
else
echo "HELLO JS";
echo json_encode($username);

?>
