"use strict";
{
  const mainNav = document.querySelector(".main-nav");
  console.log(mainNav);
  let targetItem = null;
  let currentItem = null;
  const findTargetItem = (className) => {
    while (!targetItem.classList.contains(className)) {
      targetItem = targetItem.parentNode;
      if (targetItem.nodeName === "BODY") {
        targetItem = null;
        return;
      }
    }
  };
  const mainNavClickHandler = (e) => {
    console.log("a");
    targetItem = e.target;
    findTargetItem("main-nav-item");
    if (currentItem) {
      currentItem.classList.remove("active");
    }
    console.log(targetItem);
    if (targetItem && targetItem.classList.contains("main-nav-item")) {
      console.log("aa");
      targetItem.classList.add("active");
      currentItem = targetItem;
    }
  };
  mainNav.addEventListener("click", mainNavClickHandler);
}
