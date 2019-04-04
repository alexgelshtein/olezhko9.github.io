<?php
    require_once("database.php");
    require_once("models/article.php");
    
    $con = db_connect();
    $articles = get_all_articles($con);

    include("views/admin.php");
?>
