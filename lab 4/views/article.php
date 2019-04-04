<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Статья</title>
</head>

<body>
    <h1>Страница статьи</h1>
    <div>
        <div class="article">
            <h2><?=$article['title']?></h2>
            <em>Дата публицакии: <?=$article['created']?></em>
            <p><?=$article['content']?></p>
        </div>
    </div>
</body>

</html>
