'use strict';

const container = document.getElementById('bars');
const speed = document.getElementById('speed');
const size = document.getElementById('size');
const newArr = document.querySelector('.newArray');
const allBtns = document.querySelectorAll('.btn');

//Swap Helper
const swap = function (idx1, idx2) {
  return new Promise((resolve) => {
    // ES6 Method To Swap Variables
    [
      ([idx1.style.transform, idx2.style.transform] = [
        idx2.style.transform,
        idx1.style.transform,
      ]),
    ];

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(idx2, idx1);
        resolve();
      }, 1);
    });
  });
};

//Change array size with slider
size.addEventListener('input', () => {
  createBars(+size.value);
});

//Selecting speed slider from DOM - Event listener to update delay time
let delay = 150;
speed.addEventListener('input', function () {
  delay = 250 - Number(speed.value);
  return delay;
});

//Function to generate the array of blocks
const createBars = function (bars = 20) {
  deleteBars();

  for (let i = 0; i < bars; i++) {
    let value = Math.ceil(Math.random() * 100);

    let bar = document.createElement('div');
    bar.classList.add('block');
    bar.style.height = `${value * 3}px`;
    // bar.style.transform = `translate(${i * 10}px)`;

    let bar_label = document.createElement('label');
    bar_label.classList.add('block_id');
    // bar_label.innerText = value;

    bar.appendChild(bar_label);
    container.appendChild(bar);
  }
};

//Delete Generated Bars
const deleteBars = function () {
  container.innerHTML = '';
};

createBars();

//Generate New Arr On Click
newArr.addEventListener('click', () => {
  createBars(size.value);
});

function disableBtns(btns) {
  btns.forEach((btn) => (btn.disabled = true));
}

function enableBtns(btns) {
  btns.forEach((btn) => (btn.disabled = false));
}

//Disable All Btn While Sorting
const disableAllBtn = function () {
  size.disabled = true;
  disableBtns(allBtns);
};

//Enable All Btn After Sorting Complete
const enableAllBtn = function () {
  size.disabled = false;
  enableBtns(allBtns);
};

export { swap, delay, disableAllBtn, enableAllBtn };
