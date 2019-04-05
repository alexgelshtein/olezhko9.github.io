<?php
    require_once("database.php");
    require_once("models/article.php");
    
    $con = db_connect();
    $articles = get_all_articles($con);
    
    echo '<a href="admin.php">Панель администратора</a>';
    require_once("views/articles.php");
?>
