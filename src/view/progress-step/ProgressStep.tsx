import usePersistFn from "@/components/hooks/usePersistFn";
import React, { useEffect } from "react";
import "./ProgressStep.scss";

// let currentIndex = 1;
// const circleElements = document.querySelectorAll("circle");
// const max = circleElements.length,
//   min = 1;

export default function ProgressStep() {
  useEffect(() => {
    const $ = (v) => document.querySelector(v);
    const $$ = (v) => document.querySelectorAll(v);
    const prevBtn = $("#prev");
    const nextBtn = $("#next");
    // const progress = $("#progress");
    const progress = document.querySelector("#progress") as any;
    const circleElements = $$(".circle");
    const min = 0,
      max = circleElements.length - 1;
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
      console.log("progress", progress);
      progress.style.width = ((100 / max) * currentActive).toFixed(4) + "%";
    }
  }, []);

  // const handlePre = usePersistFn(() => {
  //   const nextBtn = document.querySelector("#next");
  //   const prevBtn = document.querySelector("#prev");
  //   if (currentIndex === min) return;
  //   if (currentIndex === min + 1)
  //     handleClass(prevBtn).addClass("disabled").removeClass("active");
  //   if (currentIndex === max)
  //     handleClass(nextBtn).addClass("active").removeClass("disabled");
  //   currentIndex--;
  //   updateProgress();
  // });

  // const handleNext = usePersistFn(() => {
  //   const nextBtn = document.querySelector("#next");
  //   const prevBtn = document.querySelector("#prev");
  //   if (currentIndex === max) return;
  //   if (currentIndex === min)
  //     handleClass(prevBtn).addClass("active").removeClass("disabled");
  //   if (currentIndex === max - 1)
  //     handleClass(nextBtn).addClass("disabled").removeClass("active");
  //   currentIndex++;
  //   updateProgress();
  // });

  // function handleClass(el) {
  //   let methods = {
  //     addClass,
  //     removeClass,
  //   };
  //   function addClass(c) {
  //     el.classList.add(c);
  //     return methods;
  //   }
  //   function removeClass(c) {
  //     el.classList.remove(c);
  //     return methods;
  //   }
  //   return methods;
  // }

  // function updateProgress() {
  //   const progress = document.querySelector("#progress");
  //   const circleElements = document.querySelectorAll("circle");
  //   circleElements.forEach((item, index) => {
  //     if (index < currentIndex) {
  //       item.classList.add("active");
  //     } else {
  //       item.classList.remove("active");
  //     }
  //   });
  //   progress.style.width =
  //     ((100 / max - 1) * (currentIndex - 1)).toFixed(4) + "%";
  // }

  return (
    <div className="wrapper">
      <div className="container">
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
