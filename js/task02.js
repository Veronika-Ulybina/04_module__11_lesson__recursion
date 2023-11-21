'use strict';

{
  const arrOfNum = [];

  const getArrayOfRandomNum = (arr) => {
    const random = Math.ceil(Math.random() * 100);
    arr.push(random);

    const sum = arr.reduce((acc, item) => acc + item, 0);

    return sum < 50 ? getArrayOfRandomNum(arrOfNum) : arr;
  };

  console.log(getArrayOfRandomNum(arrOfNum));
}
