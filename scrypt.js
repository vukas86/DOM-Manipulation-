const tabs = document.querySelectorAll(".operations_tab");
const tabsContainer = document.querySelector(".operations-container");
const tabsContent = document.querySelectorAll(".operations_content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations_tab");
  console.log(clicked);

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
  console.log(clickedBtn);

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
  console.log(clickedBtn);

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
