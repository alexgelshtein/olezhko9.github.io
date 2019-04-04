<?php
    require_once("database.php");
    require_once("models/article.php");
    
    $con = db_connect();
    $article = get_all_articles($con, $_GET['id']);
    
    echo $article;
?>
