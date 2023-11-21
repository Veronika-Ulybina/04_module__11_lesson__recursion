'use strict';

{
  const randomNumber = Math.ceil(Math.random() * 100);

  const guessNumber = (random) => {
    const userNum = prompt('Отгадайте число от 1 до 100?');

    if (userNum === null || userNum === '') {
      return;
    }

    if (userNum > random) {
      alert('Меньше!');
    } else if (userNum < random) {
      alert('Больше!');
    } else if (userNum == random) {
      alert('Правильно!');
      return;
    } else if (Number.isNaN(+userNum)) {
      alert('Введите число!');
    }

    return guessNumber(randomNumber);
  };

  guessNumber(randomNumber);
}
