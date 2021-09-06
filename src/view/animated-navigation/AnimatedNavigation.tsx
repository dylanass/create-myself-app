import React, { useEffect } from "react";
import "./AnimatedNavigation.scss";

export default function AnimatedNavigation() {
  useEffect(() => {
    const $ = (v) => document.querySelector(v);
    const nav = $("#nav");
    const toggle = $("#toggle");
    toggle.addEventListener("click", () => nav.classList.toggle("active"));
  }, []);
  return (
    <div className="nav-wrapper">
      <nav className="nav active" id="nav">
        <ul>
          <li>
            <a href="/">index</a>
          </li>
          <li>
            <a href="https://eveningwater.github.io/#/">my blog</a>
          </li>
          <li>
            <a href="https://github.com/eveningwater">github</a>
          </li>
          <li>
            <a href="https://gitee.com/eveningwater">gitee</a>
          </li>
        </ul>
        <button type="button" id="toggle" className="btn">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </button>
      </nav>
    </div>
  );
}
