import React from "react";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <div className="not-found-wrapper">
      <div className="g-container">
        <div className="rail">
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
        </div>
        <div className="world">
          <div className="forward">
            <div className="box">
              <div className="wall"></div>
              <div className="wall"></div>
              <div className="wall"></div>
              <div className="wall"></div>
              <div className="wall"></div>
              <div className="wall"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="g-to">
        <p>Maybe you want to go:</p>
        <div className="go-btn-box">
          <a href="/" className="svg-border-animation" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 80 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="32" width="80"></rect>
            </svg>
            <div className="hover-text">Login</div>
          </a>
          <a
            href="https://www.eveningwater.com/my-web-projects/"
            className="svg-border-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 80 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="32" width="80"></rect>
            </svg>
            <div className="hover-text">Blogs</div>
          </a>
          <a
            href="https://eveningwater.github.io/ew-color-picker/"
            className="svg-border-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 80 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="32" width="80"></rect>
            </svg>
            <div className="hover-text">github</div>
          </a>
          <a
            href="https://www.eveningwater.com/vue-resume/vue3.0/"
            className="svg-border-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 80 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="32" width="80"></rect>
            </svg>
            <div className="hover-text">MDN</div>
          </a>
        </div>
      </div>

      <footer className="not-footer">
        <p>Copyright @2020 - 2021 all rights reserved eveningWater</p>
      </footer>
    </div>
  );
}
