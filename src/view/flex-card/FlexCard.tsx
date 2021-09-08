import React, { useEffect } from "react";
import "./FlexCard.scss";

export default function FlexCard() {
  useEffect(() => {
    const panelItems = document.querySelectorAll(".flex-container > .panel");
    panelItems.forEach((item) => {
      item.addEventListener("click", () => {
        // [].filter
        //   .call(item.parentElement.children, (el) => el !== item)
        //   .forEach((el) => el.classList.remove("active"));
        panelItems.forEach((el) => el.classList.remove("active"));

        item.classList.add("active");
      });
    });
  }, []);
  return (
    <div className="flex-container">
      <div
        className="panel active"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      ></div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      ></div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)",
        }}
      ></div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)",
        }}
      ></div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      ></div>
    </div>
  );
}
