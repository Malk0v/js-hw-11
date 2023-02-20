// ## Задание 3 - генератор промисов

// Выполняй это задание в файлах `03-promises.html` и `03-promises.js`. Посмотри
// демо видео работы генератора промисов.

// https://user-images.githubusercontent.com/17479434/127932183-42232f26-4db2-4614-86bc-6bec54b1d6a4.mp4

// <!-- Посмотри
// [демо видео](https://user-images.githubusercontent.com/17479434/127932183-42232f26-4db2-4614-86bc-6bec54b1d6a4.mp4)
// работы генератора промисов. -->

// В HTML есть разметка формы, в поля которой пользователь будет вводить первую
// задержку в миллисекундах, шаг увеличения задержки для каждого промиса после
// первого и количество промисов которое необходимо создать.


import Notiflix from 'notiflix';

// console.log(Notiflix);
// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

const refs = {
  firstDelay: document.querySelector('.delay'),
  stepDelay: document.querySelector('.step'),
  amount: document.querySelector('.amound'),
  button: document.querySelector('.button'),
};

Notiflix.Notify.success('Привет, заполни поля');
 
refs.button.addEventListener('click', e => {
  e.preventDefault();

  const delay = refs.firstDelay.value;
  const stepValue = refs.stepDelay.value;
  const amountValue = Number(refs.amount.value);

  const timeoutId = setTimeout(() => {
    Notiflix.Notify.info('запуск!');

    let position = 0;
    // ниже код для дополнительной проверки, в этом примере он не нужен
    let amountCounter = false;

    const intervaId = setInterval(() => {
      if (position >= amountValue || amountCounter) {
        Notiflix.Notify.warning(`было запущено ${position} промисов, останавливаем интервал`);
        clearInterval(intervaId);
        return
      }

      position += 1;
     
      function createPromise(position, delay) {
        return new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.5;

          if (shouldResolve) {
            resolve(
              Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`))
          } else {
            reject(
              Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`));
            ;
          }
        });
      }

      createPromise(position, delay)
        .then(() => {
        })
        .catch(() => {
        });
        
    }, stepValue);
  }, delay);

});

// Напиши скрипт, который при сабмите формы вызывает функцию
// `createPromise(position, delay)` столько раз, сколько ввели в поле `amount`. При
// каждом вызове передай ей номер создаваемого промиса (`position`) и задержку
// учитывая введенную пользователем первую задержку (`delay`) и шаг (`step`).


// Дополни код функции `createPromise` так, чтобы она возвращала **один промис**,
// который выполянется или отклоняется через `delay` времени. Значением промиса
// должен быть объект, в котором будут свойства `position` и `delay` со значениями
// одноименных параметров. Используй начальный код функции для выбора того, что
// нужно сделать с промисом - выполнить или отклонить.


// ```js
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// //


// ```js
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// ```

// ### Библиотека уведомлений

// > ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
// > дополнительной практикой.

// Для отображения уведомлений пользователю вместо `console.log()` используй
// библиотеку [notiflix](https://github.com/notiflix/Notiflix#readme).
