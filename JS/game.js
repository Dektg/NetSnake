const canvas = document.getElementById("game");//Переташил canvas в js
const ctx = canvas.getContext("2d");//Сказал что игра в формате 2d

const ground = new Image();//Добавил констане ground значение изображения
ground.src = "Image/ground.png";// Залил изображение поля в переменную (добавил ей значение)

const food_Img = new Image();//Добавил констане food значение изображения
food_Img.src = "Image/food.png";// Залил изображение еды в переменную (добавил ей значение)

let box = 32; //Сделал переменную которая отвечает за создание одного блока (всего в поле 17*15=255 блока по 32px каждый)

let score = 0;//Перемнная хранящая в себе счет

let food = {//Счайный спавн еды по x и по y
  x: Math.floor((Math.random() * 17 + 1)) * box,//Math.floor()округляет до целых; Math.random() случайное число от 0 до 1 (Напривмер: 0.2345678); Мы эту функцию умножаем на 17 (блоков в ширину) и прибавляем 1, что-бы еда спавнилась на поле (мы пропуснаем один блок по ширине и еда никогда не появиться вне поля)
  y: Math.floor((Math.random() * 15 + 3)) * box//Тут все немного по другому, в одном ряду по вертикали (по y) у нас 15 блоков; и умножаем это все дело на box (это длинна одного блока) то есть на 32px
};

let snake = [];//Состав змейки
snake [0] = {//Нулевой элемент змейки это её голова
  x: 9 * box,//Отображаем ровно по центу
  y: 10 * box//Отображаем ровно по центу
};//Кривыми скобками указываем что это объект

document.addEventListener("keydoun", direction);

let dir;

function direction (event) {
  if (event.keyCode == 37 && dir != "right") {//Если мы нажали калавишу под кодом 37 (стрелочка влево) она сработает если до этого не нажата кнопочка под кодом 39 (стрелка в право)
    dir = "left";
  else if(event.keyCode == 38 && dir != "down")
    dir = "up";
  else if(event.keyCode == 39 && dir != "left")
    dir = "right";
  else if(event.keyCode == 40 && dir != "up")
    dir = "down";
}

function Draw_Game() {
  ctx.drawImage(ground, 0, 0)//Нарисовал поле (ground) на всю ширену canvas

  ctx.drawImage(food_Img, food.x, food.y);//Арбуз с координатами food

  for (var i = 0; i < snake.length; i++) {// В цикле она будет увеличиваться если съест арбуз
    ctx.fillStyle = "red";//Цвет змейки
    ctx.fillRect(snake[i].x, snake[i].y, box, box);//fillRect - создать объект в массиве snake под номером [i] (отчет идет от нуля значит первый объект это голова змейки(snake[0]) которая спавница в центре x: 9 * box, y: 10 * box) a box, box в конче это ширина и высота блока
  }

  ctx.fillStyle = "#a2d149";//Цвет текста
  ctx.font = "35px Arial";//Шрифт
  ctx.fillText(score, box * 2, box * 1.6)//Координаты счетчика

}

let game = setInterval(Draw_Game, 100);//Функция будет вызываться каждые 100 милисекунд (тоесть обновляться каждые 100 милимекунд)
