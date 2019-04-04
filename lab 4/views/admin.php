<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Админка</title>
</head>

<body>
    <h1>Страница управления постами</h1>
    <a href="index.php">Главная</a>
    <br>
    <div>
        <form method="post" action="admin.php?action=add">
            <input type="text" name="title" value="" placeholder="Название статьи"><br>
            <textarea name="content" cols="30" rows="5"></textarea><br>
            <input type="submit" value="Добавить"><br>
        </form>
    </div>
    <div>
        <table border="1">
            <tr>
                <th>id</th>
                <th>title</th>
                <th>date</th>
                <th></th>
            </tr>
            <?php foreach($articles as $a): ?>
            <tr>
                <td><?=$a['id']?></td>
                <td><?=$a['title']?></td>
                <td><?=$a['created']?></td>
                <td><a href="admin.php?action=delete&id=<?=$a['id']?>">Удалить</a></td>
            </tr>
            <?php endforeach ?>
        </table>
        <br>
        <a href="index.php?action=add">Добавить запись</a>
    </div>
</body>

</html>
