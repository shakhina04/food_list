
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

let numsShow = document.querySelectorAll(".curr")

let slideNum = 0;

function slideNumShow(n) {
  if (n > numsShow.length - 1) {
    slideNum = 0;
  }

  if (n < 0) {
    slideNum = numsShow.length - 1;
  }

  numsShow.forEach((numShow) => numShow.classList.add("fade_num", "hide_num"));
  numsShow[slideNum].classList.remove("hide_num");
}

slideNumShow(slideNum);

next.onclick = () => {
  slideNum++;
  slideNumShow(slideNum);
};

prev.onclick = () => {
  slideNum--;
  slideNumShow(slideNum);
};
// */


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










