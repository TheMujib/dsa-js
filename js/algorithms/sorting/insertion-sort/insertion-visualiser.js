'use strict';

import {
  animate,
  delay,
  disableAllBtn,
  enableAllBtn,
} from '../../../../index.js';

const insertionSort = async () => {
  let bar = document.querySelectorAll('.block');
  let currentVal, j;

  bar[0].style.background = '#06FF00';
  for (let i = 1; i < bar.length; i++) {
    currentVal = bar[i].style.height;

    bar[i].style.background = '#332FD0';

    await animate(delay);

    for (
      j = i - 1;
      j >= 0 && parseInt(bar[j].style.height) > parseInt(currentVal);
      j--
    ) {
      bar[j].style.background = '#06FF00';
      bar[j + 1].style.height = bar[j].style.height;
      await animate(delay);
    }
    bar[j + 1].style.height = currentVal;
    bar[i].style.background = '#06FF00';
  }
};

const insertionSortBtn = document.querySelector('.insertionsort');
insertionSortBtn.addEventListener('click', async function () {
  disableAllBtn();
  await insertionSort();
  enableAllBtn();
});
