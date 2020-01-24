'use strict';

// let likeButtons = document.getElementsByTagName('button');



// for (let i = 0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener('click', likeMe);
// }

// function likeMe(e) {
//   let character = e.target.parentNode;
//   let counter = character.getElementsByTagName('span')[0];
//   let count = parseInt(counter.textContent);
//   count++;
//   counter.textContent = count;
// }


$('button').on('click', likeMe)
function likeMe() {
  let likeButtons = $('button');
  for (let i = 0; i < likeButtons.length; i++) {
    let character = $(event.target).parentNode;
    let counter = character.$('span')[0];
    let count = parseInt(counter.textContent);
    count++;
    counter.textContent = count;
  }
}


