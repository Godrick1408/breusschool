<?php
session_start();
if (!isset($_SESSION['user'])) {
  header('Location: login.html');
  exit;
}
?>
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Кабінет</title>
</head>
<body>
  <h1>Вітаємо, <?php echo $_SESSION['user']; ?>!</h1>
  <p>Ви успішно увійшли.</p>
  <a href="logout.php">Вийти</a>
</body>
</html>
