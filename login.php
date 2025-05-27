<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$users = json_decode(file_get_contents('users.json'), true);

// Перевірка
if (isset($users[$username]) && password_verify($password, $users[$username])) {
  $_SESSION['user'] = $username;
  header('Location: dashboard.php');
  exit;
} else {
  echo "Невірний логін або пароль. <a href='login.html'>Спробуйте ще раз</a>";
}
?>
