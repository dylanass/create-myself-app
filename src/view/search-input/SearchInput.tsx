import React, { useEffect } from "react";
import "./SearchInput.scss";

export default function SearchInput() {
  useEffect(() => {
    const $ = (v) => document.querySelector(v);
    const searchBtn = $("#searchBtn");
    const searchContainer = $(".search");
    const searchInput = $(".input");
    searchBtn.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
      searchInput.focus();
    });
  }, []);
  return (
    <div className="search">
      <input type="text" className="input" placeholder="请输入你要搜索的内容" />
      <button className="search-btn" id="searchBtn">
        <i className="search-icon"></i>
      </button>
    </div>
  );
}
