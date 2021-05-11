const carousel = document.getElementById("cards");
const nextBtn = document.querySelector("#next-btn > div");
const prevBtn = document.querySelector("#prev-btn > div");
const dots = document.getElementById('dots');

const nextBtnClickHandler = (event) => {
  const current = document.querySelector(".current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    carousel.children.item(0).classList.add('current');
  }
  current.classList.remove('current');
  addDotActiveClass();
}

const prevBtnClickHandler = () => {
  const current = document.querySelector(".current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    carousel.children.item(3).classList.add('current');
  }
  current.classList.remove('current');
  addDotActiveClass();
}

const dotClickHandler = (index) => {
  const current = document.querySelector(".current");

  carousel.children.item(index).classList.add('current')
  current.classList.remove('current');
  addDotActiveClass();
}

nextBtn.addEventListener('click', nextBtnClickHandler)
prevBtn.addEventListener('click', prevBtnClickHandler)

const addDots = () => {
  for (let i=0; i < carousel.children.length; i++) {
    const dot = document.createElement('div');
    if ( i === 0 ) {
      dot.classList.add('activeDot')
    }
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      dotClickHandler(i)
    });
    dots.appendChild(dot);
  }
  addDotActiveClass(true);
}

const addDotActiveClass = (first = false) => {
  const index = Array.from(carousel.children).findIndex((card) => {
    return card.classList.contains('current');
  });
  const currentDot = document.querySelector('.activeDot');
  dots.children.item(index).classList.add('activeDot');
  if (!first) {
    console.log('inside')
    currentDot.classList.remove('activeDot');
  }
}

document.onload = (() => {
  addDots();
})();

setInterval(() => {
  nextBtnClickHandler();
}, 5000);
