const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Авторизуватися", "");
if (message === null) {
  console.log((message = "Скасовано користувачем"));
} else if (message === ADMIN_PASSWORD) {
  console.log((message = "Ласкаво просимо"));
} else {
  console.log((message = "Доступ заборонений, невірний пароль!"));
}
alert(message);
