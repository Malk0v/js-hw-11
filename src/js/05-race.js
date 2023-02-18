const cars = [
  'Astra',
  'Octavia',
  'Vectra',
  'Golf',
  'Sephia',
  'Megane',
  'Dvenashka',
];

const refs = {
  startBtn: document.querySelector('.js-race-btn'),
  winnerField: document.querySelector('.winner'),
  progressField: document.querySelector('.progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

let raceCounter = 0;

refs.startBtn.addEventListener('click', () => {
    const promises = cars.map(run);
    raceCounter += 1;
    refs.winnerField.textContent = ''
    refs.progressField.textContent =' 🏁 Заезд начался!';

  Promise.race(promises).then(({ car, time }) => {
      updateWinnerField(`💥 Победил ${car}, финишировав за ${time} времени`);

      updateResultsTable({ car, time, raceCounter });
    // console.log(`%c Победил ${horse}, финишировав за ${time} времени`,'color: green; font-size: 14px;');
  });

  Promise.all(promises).then(() => {
    updateProgressField('Заезд окончен');
    //   console.log('%c Заезд окончен', 'color: blue; font-size: 14px;');
  });
});

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateResultsTable({ car, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td> <td>${car}</td><td>${time}</td></tr>`
    refs.tableBody.insertAdjacentHTML('beforeend', tr)
}

function run(car) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ car, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
