'use strict';

import {
  swap,
  animate,
  delay,
  disableAllBtn,
  enableAllBtn,
} from '../../../../index.js';

// Optimized BubbleSort with noSwaps
const bubbleSort = async function () {
  let bar = document.querySelectorAll('.block');

  for (let i = bar.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      bar[j].style.backgroundColor = '#332FD0';
      bar[j + 1].style.backgroundColor = '#FF5F00';

      await animate(delay);

      let value1 = parseInt(bar[j].style.height);
      let value2 = parseInt(bar[j + 1].style.height);

      if (value1 > value2) {
        swap(bar[j], bar[j + 1]);
        bar = document.querySelectorAll('.block');
      }
      bar[j].style.backgroundColor = '#00FFC6';
      bar[j + 1].style.backgroundColor = '#00FFC6';
    }
    bar[i - 1].style.backgroundColor = '#06FF00';
  }
};

const bubSortbtn = document.querySelector('.bubblesort');
bubSortbtn.addEventListener('click', async function () {
  disableAllBtn();
  await bubbleSort();
  enableAllBtn();
});
