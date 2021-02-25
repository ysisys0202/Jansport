"use strict";
{
  const mobileBtn = document.querySelector(".mobile-nav-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
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

  const showNav = () => {
    mobileMenu.classList.toggle("show");
  };
  const navTabActive = (item) => {
    item.classList.add("clicked");
    currentItem = item;
  };

  const navTabInactive = (currentItem) => {
    currentItem.classList.remove("clicked");
  };

  const btnClickHandler = () => {
    showNav();
  };
  const menuClickHandler = (e) => {
    targetItem = e.target;
    findTargetItem("mobile-menu-item");

    if (targetItem && targetItem.classList.contains("mobile-menu-item")) {
      if (currentItem) {
        navTabInactive(currentItem);
      }
      navTabActive(targetItem);
    }
  };

  navTabActive(mobileMenuItems[0]);
  mobileBtn.addEventListener("click", btnClickHandler);
  mobileMenu.addEventListener("click", menuClickHandler);
}
