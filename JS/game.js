const canvas = document.getElementById("game");//Переташил canvas в js
const ctx = canvas.getContext("2d");//Сказал что игра в формате 2d

const ground = new Image();//Добавил констане ground значение изображения
ground.src = "Image/groung.png";// Залил изображение поля в переменную (добавил ей значение)
