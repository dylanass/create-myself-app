import React, { useEffect, useState } from "react";
import "./ContentPlaceholder.scss";

export default function ContentPlaceholder() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="content-placeholder-wrapper">
      {loading ? (
        <div className="card">
          <div className="card-header animated-bg" id="card-header"></div>
          <div className="card-content">
            <div className="card-title animated-bg animated-bg-text" id="card-title"></div>
            <p className="card-message" id="card-message">
              <span className="animated-bg animated-bg-text"></span>
              <span className="animated-bg animated-bg-text"></span>
              <span className="animated-bg animated-bg-text"></span>
            </p>
            <div className="card-author">
              <div className="card-author-avatar animated-bg" id="card-author-avatar"></div>
              <div className="card-author-info">
                <strong
                  className="card-author-name animated-bg animated-bg-text"
                  id="card-author-name"
                ></strong>
                <small
                  className="card-author-date animated-bg animated-bg-text"
                  id="card-author-date"
                ></small>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-header animated-bg" id="card-header">
            <img
              alt="图片加载中"
              src={"https://www.eveningwater.com/my-web-projects/js/81/images/header.png"}
            />
          </div>
          <div className="card-content">
            <h3 className="card-title" id="card-title">
              草帽小子
            </h3>
            <p className="card-message" id="card-message">
              外号“草帽”路飞，是草帽一伙、草帽大船团船长，极恶的世代之一。橡胶果实能力者，悬赏金
              <mark>15</mark>亿贝里。梦想是找到传说中的<mark>One Piece</mark>，成为海贼王。
            </p>
            <div className="card-author">
              <div className="card-author-avatar animated-bg" id="card-author-avatar">
                <img
                  alt="图片加载中"
                  src={"https://www.eveningwater.com/my-web-projects/js/81/images/avatar.png"}
                />
              </div>
              <div className="card-author-info">
                <strong className="card-author-name " id="card-author-name">
                  蒙奇·D·路飞
                </strong>
                <small className="card-author-date " id="card-author-date">
                  2021-07-12
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
