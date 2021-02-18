"use strict";
{
  const product = document.querySelector(".product");
  const producItems = document.querySelectorAll(".product-item");
  const productImgs = document.querySelectorAll(".product-img");
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
  const settingIndex = () => {
    producItems.forEach((productItem, index) => {
      productItem.dataset.index = index;
    });
    productImgs.forEach((productImg, index) => {
      productImg.dataset.index = index;
    });
  };
  const changeImg = (item, currentFile, willchangeFile) => {
    const targetIndex = item.dataset.index;
    const currentImgFile = productImgs[targetIndex].getAttribute("src");
    const changeImgFile = currentImgFile.replace(currentFile, willchangeFile);
    productImgs[targetIndex].setAttribute("src", changeImgFile);
  };
  const mouseoverHandler = (e) => {
    targetItem = e.target;
    findTargetItem("product-item");
    if (targetItem && targetItem.classList.contains("product-item")) {
      changeImg(targetItem, "front", "side");
    }
  };
  const mouseoutHandler = (e) => {
    targetItem = e.target;
    findTargetItem("product-item");
    if (targetItem && targetItem.classList.contains("product-item")) {
      changeImg(targetItem, "side", "front");
    }
  };
  settingIndex();
  product.addEventListener("mouseover", mouseoverHandler);
  product.addEventListener("mouseout", mouseoutHandler);
}
