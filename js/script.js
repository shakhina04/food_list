let modal = document.querySelector(".modal");
let btns = document.querySelectorAll(".btn");
let modalClose = document.querySelector(".modal__close");
let inps = document.querySelectorAll("input");

let patterns = {
  name: /^[a-z ,.'-]+$/i,
  phone:
    /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
};

btns.forEach((btn) => {
  btn.onclick = () => {
    modal.style.display = "block";
  };
  modalClose.onclick = () => {
    modal.style.display = "none";
  };
});

inps.forEach((inp) => {
  inp.onkeyup = () => {
    if (patterns[inp.name].test(inp.value)) {
      inp.classList.remove("error-field");
      inp.classList.remove("required");
    } else {
      inp.classList.add("error-field");
      inp.classList.add("required");
    }
  };
});

let prev = document.querySelector(".offer__slider-prev");
let next = document.querySelector(".offer__slider-next");
let slides = document.querySelectorAll(".offer__slide");

let slideIndex = 0;

function slideShow(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => slide.classList.add("fade", "hide"));
  slides[slideIndex].classList.remove("hide");
}

slideShow(slideIndex);

next.onclick = () => {
  slideIndex++;
  slideShow(slideIndex);
};

prev.onclick = () => {
  slideIndex--;
  slideShow(slideIndex);
};

/* //Mine//
let tabContents = document.querySelectorAll('.tabcontent')
let tabHeaders = document.querySelectorAll('.tabheader__item')
let showedContent = 0
tabContents.forEach ((tab) => {
  tab.style.display = 'none'
})
showTabContent(showedContent)
function showTabContent(showTab) {
  tabContents.forEach((tabContent) => {
    tabContent.style.display = 'none'
  })
  tabContents[showTab].style.display = 'block'
}

tabHeaders.forEach((tabItem) => {
	addActive('tabheader__item_active', tabItem, tabHeaders, tabContents)
})
function addActive(active, item, elArr, items) {
  item.onclick = () => {
  elArr.forEach((el) => {
    el.classList.remove(active)
  })
  item.classList.add(active)
      showTabContent(item.getAttribute('data-tab'))
}
}
*/

//////////
let tabContents = document.querySelectorAll(".tabcontent");
let tabButtons = document.querySelectorAll(".tabheader__item");

tabContents.forEach((item) => item.classList.add("fade", "hide"));
tabContents[0].classList.remove("hide");

tabButtons.forEach((btn, index) => {
  btn.onclick = () => {
    tabContents.forEach((item) => item.classList.add("hide"));
    tabContents[index].classList.remove("hide");

    tabButtons.forEach((el) => el.classList.remove("tabheader__item_active"));
    btn.classList.add("tabheader__item_active");
  };
});

let genderBtns = document.querySelectorAll("#gender .calculating__choose-item");
let activeBtns = document.querySelectorAll(".calculating__choose_big  .calculating__choose-item");
let inputs = document.querySelectorAll(".calculating__choose_medium input");
let resultView = document.querySelector('#result')

let userData = {
  gender: "woman",
};

// Ваш пол //
genderBtns.forEach((btn) => {
  btn.onclick = () => {
    genderBtns.forEach((el) =>
      el.classList.remove("calculating__choose-item_active")
    );
    btn.classList.add("calculating__choose-item_active");

    let gender = btn.getAttribute("data-g");
    console.log(gender);
    userData.gender = btn.getAttribute("data-g"); 
  };
});

inputs.forEach((inp) => {
  inp.onkeyup = () => {
    userData[inp.id] = inp.value;
  };
});

// Выберите вашу физическая активность //
activeBtns.forEach((btn) => {
  btn.onclick = () => {
    activeBtns.forEach((el) =>
      el.classList.remove("calculating__choose-item_active")
    );
    btn.classList.add("calculating__choose-item_active");

    let kfc = +btn.getAttribute('data-activity')

    if (userData.gender === "woman") {
      // Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
      result = 655.1 + (9.563 * userData.weight) + (1.85 * userData.height) - (4.676 * userData.age); 

      resultView.innerHTML = Math.round(result * kfc)
    } else {
      // Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).
      let result = 66.5 + (13.75 * userData.weight) + (5.003 * userData.height) - (6.775 * userData.age)

      resultView.innerHTML = Math.round(result * kfc)
    }
  };
});



//-//Timer //-//
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours, 
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = document.querySelector("#days");
  var hoursSpan = document.querySelector("#hours");
  var minutesSpan = document.querySelector("#minutes");
  var secondsSpan = document.querySelector("#seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 12 * 20 * 56 * 20 * 1000); // for endless timer
var deadline = 'September 23 2023';
initializeClock("timer", deadline);






var defaults = {
  spread: 360,
  ticks: 500,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 3);
setTimeout(shoot, 100);
setTimeout(shoot, 200);


