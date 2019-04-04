<?php
    require_once("database.php");
    require_once("models/article.php");
    
    $con = db_connect();
    $article = get_article($con, $_GET['id']);

//    echo $article['title'];
    include("views/article.php");
?>
