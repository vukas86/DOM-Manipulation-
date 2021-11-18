"use strict";
const tabs = document.querySelectorAll(".operations_tab");
const tabsContainer = document.querySelector(".operations-container");
const tabsContent = document.querySelectorAll(".operations_content");
const nav = document.querySelector(".nav");

document.querySelector("#header").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav_item")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav_item");
    /* const logo = link.closest(".nav").querySelector("img"); */

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    /* logo.style.opacity = this; */
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations_tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations_tab-active"));
  tabsContent.forEach((c) => c.classList.remove("operations_content--active"));

  clicked.classList.add("operations_tab-active");
  document
    .querySelector(`.operations_content-${clicked.dataset.tab}`)
    .classList.add("operations_content--active");
});

// --- CONTAINER ---

const containerBtns = document.querySelectorAll(".btn2");
const container2 = document.querySelector(".container2");
const containerContent = document.querySelectorAll(".container-content");

container2.addEventListener("click", function (el) {
  const clickedBtn = el.target.closest(".btn2");

  if (!clickedBtn) return;

  containerBtns.forEach((c) => c.classList.remove("container_tab-active"));
  containerContent.forEach((con) =>
    con.classList.remove("container_content-active")
  );

  clickedBtn.classList.add("container_tab-active");

  document
    .querySelector(`.container_content-${clickedBtn.dataset.operat}`)
    .classList.add("container_content-active");
});

// ---CONTAINER3---

const sectionBtns3 = document.querySelectorAll(".btn3");
const container3 = document.querySelector(".container3");
const container3Content = document.querySelectorAll(".container3-content");

container3.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".btn3");

  if (!clickedBtn) return;

  sectionBtns3.forEach((c) => c.classList.remove("container3_btn-active"));
  container3Content.forEach((con) =>
    con.classList.add("container3-content-active")
  );

  clickedBtn.classList.add("container3_btn-active");

  document
    .querySelector(`.container3-content-${clickedBtn.dataset.btns}`)
    .classList.remove("container3-content-active");
});

// ---INFO BANNER---

document.querySelector(".chris").onmouseover = function () {
  document.querySelector(".aboutSticker").style.display = "flex";
};

document.querySelector(".aboutSticker").onmouseover = function () {
  document.querySelector(".aboutSticker").style.display = "flex";
};

document.querySelector(".chris").onmouseout = function () {
  document.querySelector(".aboutSticker").style.display = "none";
};

// ---STICKY NAV---

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const navObser = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 1,
  rootMargin: `-${navHeight}px`,
});
navObser.observe(nav);
