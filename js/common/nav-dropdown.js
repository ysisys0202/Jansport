"use strict";
{
  const header = document.querySelector(".global-header");
  const navOverlay = document.querySelector(".nav-overlay");
  const dropdownNavLists = document.querySelectorAll(".dropdown-nav-list");
  let targetItem = null;

  const findTargetItem = (className) => {
    while (!targetItem.classList.contains(className)) {
      targetItem = targetItem.parentNode;
      if (targetItem.nodeName === "BODY") {
        targetItem = null;
        return;
      }
    }
  };

  const mouseoverHandler = (e) => {
    targetItem = e.target;
    findTargetItem("dropdown-nav");
    if (targetItem && targetItem.classList.contains("dropdown-nav")) {
      navOverlay.classList.add("active");
      dropdownNavLists.forEach((dropdownNavList) => {
        dropdownNavList.classList.add("active");
      });
    }
  };

  const mouseoutHandler = (e) => {
    targetItem = e.target;
    findTargetItem("dropdown-nav");
    if (targetItem && targetItem.classList.contains("dropdown-nav")) {
      navOverlay.classList.remove("active");
      dropdownNavLists.forEach((dropdownNavList) => {
        dropdownNavList.classList.remove("active");
      });
    }
  };

  header.addEventListener("mouseover", mouseoverHandler);
  header.addEventListener("mouseout", mouseoutHandler);
}
