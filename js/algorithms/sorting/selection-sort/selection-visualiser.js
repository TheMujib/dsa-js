'use strict';

import {
  swap,
  animate,
  delay,
  disableAllBtn,
  enableAllBtn,
} from '../../../../index.js';

const selectionSort = async function () {
  let bar = document.querySelectorAll('.block');

  for (let i = 0; i < bar.length; i++) {
    let lowest = i;
    bar[i].style.backgroundColor = '#332FD0';

    for (let j = i + 1; j < bar.length; j++) {
      bar[j].style.backgroundColor = '#FF5F00';

      await animate(delay);

      let value1 = parseInt(bar[lowest].style.height);
      let value2 = parseInt(bar[j].style.height);

      if (value1 > value2) {
        if (lowest !== i) {
          bar[lowest].style.backgroundColor = '#00FFC6';
        }
        lowest = j;
      } else {
        bar[j].style.backgroundColor = 'rgb(24, 190, 255)';
      }
    }
    await animate(delay);
    swap(bar[i], bar[lowest]);

    bar[lowest].style.backgroundColor = 'rgb(24, 190, 255)';
    bar[i].style.backgroundColor = '#06FF00';
  }
};

const selectionSortbtn = document.querySelector('.selectionsort');
selectionSortbtn.addEventListener('click', async function () {
  console.log('gg');
  disableAllBtn();
  await selectionSort();
  enableAllBtn();
});
