
// В HTML есть кнопки «Start» и «Stop».

// ```html
// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>
// ```

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет
// фона `<body>` на случайное значение используя инлайн стиль. При нажатии на
// кнопку «Stop», изменение цвета фона должно останавливаться.

// > ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай
// > так, чтобы пока изменение темы запушено, кнопка «Start» была не активна
// > (disabled).

// Для генерации случайного цвета используй функцию `getRandomHexColor`.

// ```js
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// ```


const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', () => {
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    start.disabled = true;
});

stop.addEventListener('click', () => {
    console.log('bay');
    body.style.backgroundColor = '';
    clearInterval(intervalId);
    start.disabled = false;
});
