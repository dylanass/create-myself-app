import React, { useEffect } from "react";
import "./ProgressStep.scss";

export default function ProgressStep() {
  useEffect(() => {
    const $ = (v) => document.querySelector(v);
    const $$ = (v) => document.querySelectorAll(v);
    const prevBtn = $("#prev");
    const nextBtn = $("#next");
    // const progress = $("#progress");
    const progress = document.querySelector("#progress") as any;
    const circleElements = $$(".circle");
    const max = circleElements.length - 1;
    let currentActive = 0;
    nextBtn.addEventListener("click", () => {
      if (nextBtn.classList.contains("disabled")) return;
      if (currentActive >= max - 1) {
        handleClass(nextBtn).addClass("disabled").removeClass("active");
      }
      if (currentActive <= max - 1) {
        currentActive++;
      }
      if (currentActive > 0) {
        handleClass(prevBtn).addClass("active").removeClass("disabled");
      }
      update();
    });
    prevBtn.addEventListener("click", () => {
      if (prevBtn.classList.contains("disabled")) return;
      if (currentActive <= 1) {
        handleClass(prevBtn).addClass("disabled").removeClass("active");
      }
      if (currentActive > 0) {
        currentActive--;
      }
      if (currentActive <= max - 1) {
        handleClass(nextBtn).addClass("active").removeClass("disabled");
      }
      update();
    });
    function handleClass(el) {
      let methods = {
        addClass,
        removeClass,
      };
      function addClass(c) {
        el.classList.add(c);
        return methods;
      }
      function removeClass(c) {
        el.classList.remove(c);
        return methods;
      }
      return methods;
    }
    function update() {
      circleElements.forEach((item, index) => {
        if (index <= currentActive) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
      progress.style.width = ((100 / max) * currentActive).toFixed(4) + "%";
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="progress-step-container">
        <div className="progress-container">
          <div id="progress" className="progress"></div>
          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        <button
          type="button"
          className="prev disabled"
          id="prev"
          // onClick={handlePre}
        >
          上一步
        </button>
        <button
          type="button"
          className="next active"
          id="next"
          // onClick={handleNext}
        >
          下一步
        </button>
      </div>
    </div>
  );
}
