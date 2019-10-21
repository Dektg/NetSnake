const canvas = document.getElementById("game");//Переташил canvas в js
const ctx = canvas.getContext("2d");//Сказал что игра в формате 2d

const ground = new Image();//Добавил констане ground значение изображения
ground.src = "Image/ground.png";// Залил изображение поля в переменную (добавил ей значение)

const food = new Image();//Добавил констане food значение изображения
food.src = "Image/food.png";// Залил изображение еды в переменную (добавил ей значение)

let box = 32; //Сделал переменную которая отвечает за создание одного блока (всего в поле 324 блока по 32px каждый)

let score = 0;//Перемнная хранящая в себе счет

function Draw_Game() {
  ctx.drawImage(ground, 0, 0)//Нарисовал поле (ground) на всю ширену canvas
}

let game = setInterval(Draw_Game, 100);//Функция будет вызываться каждые 100 милисекунд (тоесть обновляться каждые 100 милимекунд)
