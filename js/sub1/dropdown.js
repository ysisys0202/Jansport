"use strict";

{
  const styleSelectList = document.querySelector(".style-select-list");
  const styleSelectItems = document.querySelectorAll(".style-select-item");
  const subclassWrappers = document.querySelectorAll(".subclass-wrapper");
  const subclassLists = document.querySelectorAll(".subclass-list");
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
  const clickHandler = (e) => {
    targetItem = e.target;
    findTargetItem("style-select-item");
    if (targetItem && targetItem.classList.contains("style-select-item")) {
      styleSelectItems.forEach((styleSelectItem) => {
        styleSelectItem.classList.remove("active");
      });
      targetItem.classList.toggle("active");
      const currentWrapper = targetItem.querySelector(".subclass-wrapper");
      const currentList = targetItem.querySelector(".subclass-list");
      const currentHeight = currentList.clientHeight;
      currentWrapper.style.height = `${currentHeight + 1}px`;
    }
  };

  styleSelectList.addEventListener("click", clickHandler);
  styleSelectItems.forEach((styleSelectItem) => {
    styleSelectItem.addEventListener("mouseleave", () => {
      styleSelectItem.classList.remove("active");
    });
  });
}
