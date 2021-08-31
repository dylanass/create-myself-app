import React, { useEffect } from "react";
import "./ScrollAnimation.scss";
import _ from "lodash";

export default function ScrollAnimation() {
  useEffect(() => {
    let boxElements = null;
    const wrapper = document.querySelector(".scroll-animation");

    // 防抖函数   @todo 不明白原文为啥要用防抖
    // function debounce(fn, time = 100) {
    //   let timer = null;
    //   return function () {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(fn, time);
    //   };
    // }

    function createTemplate(num) {
      let _create = (t) => document.createElement(t);
      for (let i = 0; i < num; i++) {
        const parent = _create("div");
        parent.classList.add("box");
        const child = _create("h3");
        child.textContent = "content";
        parent.appendChild(child);
        wrapper.appendChild(parent);
      }
      return [].filter.call(wrapper.children, (el) => el.classList.contains("box"));
    }
    function showBox() {
      if (!boxElements) {
        return;
      }
      let triggerBottom = (window.innerHeight / 5) * 4;
      boxElements.forEach((box, index) => {
        
        //@todo top有负数？
        const top = box.getBoundingClientRect().top;
        console.log("top :>> ", top);
        if (top <= triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }
    boxElements = createTemplate(30);
    wrapper.addEventListener("scroll", _.throttle(showBox, 100));
  }, []);

  return (
    <div className="scroll-animation">
      <h1>scroll to see animation</h1>
    </div>
  );
}
