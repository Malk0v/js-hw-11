const btn = document.querySelector('ul');
const text = document.querySelector('.userArea');

btn.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  makeOrder(e.target.textContent)
    .then(onMakeOrderSuccess)
    .catch(onMakeOrderError);
  // console.log(btn.textContent);

  // text.insertAdjacentHTML('beforeend', e.target.textContent);
});

const makeOrder = dish => {
  const DELAY = 1000;

  return (promice = new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve(`😀 вот ваше блюдо, "${dish}"`);
      }
      reject(
        `😓 извините закончились продукты для, "${dish}", повторите чуть попозже`
      );
    }, DELAY);
  }));
};

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  text.innerHTML = '';
  text.insertAdjacentHTML('beforeend', result);
  console.log(result);
}

function onMakeOrderError(error) {
  text.innerHTML = '';
  text.insertAdjacentHTML('beforeend', error);
  console.log(error);
}
