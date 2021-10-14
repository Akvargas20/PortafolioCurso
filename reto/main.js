const main = document.getElementById('nav-main');
const btn = document.getElementById('btn-burger');
const line = document.querySelector('.main_boton__line');

function dropDown() {
  main.classList.toggle('show');
  line.classList.toggle('cross');
}

btn.addEventListener('click', dropDown);

/* Activate Submain */
function toggleSubmain() {
  const mainQuery = main.querySelector('.submain-active');
  if (this.classList.contains('submain-active')) {
    this.classList.remove('submain-active');
  } else if (mainQuery) {
    mainQuery.classList.remove('submain-active');
    this.classList.add('submain-active');
  } else {
    this.classList.add('submain-active');
  }
}

const secondNav = document.querySelectorAll('.main-items');
for (let element of secondNav) {
  if (element.querySelector('.main_lista_second')) {
    element.addEventListener('click', toggleSubmain, false);
  }
}

/* Close Submain From Anywhere */
function closeSubmain(element) {
  const mainQuery = main.querySelector('.submain-active');
  let isClickInside = main.contains(element.target);
  if (!isClickInside && mainQuery) {
    mainQuery.classList.remove('submain-active');
  }
}

document.addEventListener('click', closeSubmain, false);
