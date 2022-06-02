const heroSection = document.querySelector(".section-hero");
//=============================================
// creating a responsive navbar component
//=============================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

//=============================================
// creating a sticky responsive navbar component
//=============================================

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  { root: null, threshold: 0 }
);

observer.observe(heroSection);

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
  p_btn_clicked.classList.add("p-btn-active");

  // To find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_elem.forEach((curElem) => {
    curElem.classList.add("p-img-not-active");
  });

  img_active.forEach((curElem) => {
    curElem.classList.remove("p-img-not-active");
  });
});
//=========================== swiper js code=======================
//============================Testimonial==========================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};

const widthSize = window.matchMedia("(max-width:780px)");
// call listner function at run time
myJsmedia(widthSize);
// Attach listner function on state change.()
widthSize.addEventListener("change", myJsmedia);

//   Scroll To Top Button  -(Without using HTML,I create HTML element in UI)

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElement);

// Function for scroll-Top
const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

// Smooth Scrolling effect.
const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  // # ka means top of page, that why we use prevent.
  e.preventDefault();
  contactSec.scrollIntoView({ behavior: "smooth" });
});

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    console.log(entry);
    //   if(entry.isIntersecting)  -- is trh se bhi likh skte hai
    if (entry.isIntersecting == false) return;

    // Animate Number
    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 200;
    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = curElem.dataset.number;
        // console.log(targetNumber);

        const initialNum = parseInt(curElem.innerHTML);
        //console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);
        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
      };
      updateNumber();
    });
    observer.observe(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);
workObserver.observe(workSection);
