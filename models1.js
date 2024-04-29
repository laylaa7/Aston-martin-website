function moveToCar(car) {
    car.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }


var slider = document.querySelector('.slider-container');
var items = slider.children;
len = items.length;
limit = len;
current = 1;
first = items[0];
last = items[len - 1];
moveToCar(items[current]);

triggers = document.querySelectorAll('.button');

// clone
slider.insertBefore(last.cloneNode(true), first);
slider.appendChild(first.cloneNode(true));

// set button triggers
triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    var delta;
    delta = (trigger.id === 'prev');
    current = (delta) ? current - 1 : current + 1;

    if (current === len + 1) {
      current = 1;
    }

    if (current === 0) {
      current = len;
    }

    console.log(current);
    moveToCar(items[current]);
  });
});

// drag functionality
var isDragging = false;
var startPos = 0;
var currentTranslate = 0;
var prevTranslate = 0;
var itemWidth = items[0].offsetWidth;
var dragThreshold = itemWidth / 4;

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', drag);
slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('mouseleave', dragEnd);

function setSliderPosition() {
  for (var i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${currentTranslate}px)`;
  }
}

function dragStart(e) {
  isDragging = true;
  startPos = e.clientX - slider.offsetLeft;
}

function drag(e) {
  if (!isDragging) return;

  var currentPos = e.clientX - slider.offsetLeft;
  var diff = currentPos - startPos;
  currentTranslate = prevTranslate + diff;

  // Add limit to dragging
  if (currentTranslate > 0) {
    currentTranslate = 0;
  } else if (currentTranslate < -itemWidth * (len - 1)) {
    currentTranslate = -itemWidth * (len - 1);
  }

  setSliderPosition();
}

function dragEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;

  if (currentTranslate > -dragThreshold) {
    currentTranslate = 0;
  } else if (currentTranslate < -(itemWidth * (len - 1) + dragThreshold)) {
    currentTranslate = -itemWidth * (len - 1);
  } else {
    current = Math.round(-currentTranslate / itemWidth) + 1;
  }

  setSliderPosition();
  moveToCar(items[current]);
}