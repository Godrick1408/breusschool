<?php
$username = $_POST['username'];
$password = $_POST['password'];

$users = json_decode(file_get_contents('users.json'), true);

// Перевірка, чи логін вже існує
if (isset($users[$username])) {
  echo "Користувач вже існує! <a href='register.html'>Назад</a>";
  exit;
}

// Додаємо нового користувача
$users[$username] = password_hash($password, PASSWORD_DEFAULT);
file_put_contents('users.json', json_encode($users));

echo "Реєстрація успішна! <a href='login.html'>Увійти</a>";
?>
