import React, { useEffect } from "react";
import "./Filter.scss";
export default function Filter() {
  useEffect(() => {
    const scale = (n, inMin, inMax, outerMin, outerMax) =>
      ((n - inMin) * (outerMax - outerMin)) / (inMax - inMin) + outerMin;
    const text = document.querySelector(".loading-text") as any;
    const bg = document.querySelector(".background") as any;
    let load = 0;
    let timer = null;
    const blurryLoadingHandler = function () {
      load++;
      if (load > 99) {
        clearTimeout(timer);
      } else {
        timer = setTimeout(blurryLoadingHandler, 20);
      }
      text.textContent = `页面加载${load}%`;
      //   console.log("opacity :>> ", scale(load, 0, 100, 1, 0));      1 => 0
      text.style.opacity = scale(load, 0, 100, 1, 0);
      //   console.log("filter :>> ", scale(load, 0, 100, 20, 0));      20  => 0
      /**
       * @description 过滤属性
       * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter
       */
      bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
    };
    blurryLoadingHandler();
  }, []);

  return (
    <div className="filter">
      <div className="background"></div>
      <p className="loading-text"></p>
    </div>
  );
}
