<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Статьи</title>
</head>

<body>
    <h1>Список всех статей</h1>
    <div>
        <?php foreach($articles as $a): ?>
        <div class="article">
            <h2><a href="article.php?id=<?=$a['id']?>"><?=$a['title']?></a></h2>
            <em>Опубликовано: <?=$a['created']?></em>
            <p><?=article_preview($a['content'])?></p>
            <br>
        </div>
        <?php endforeach ?>
    </div>
</body>

</html>
