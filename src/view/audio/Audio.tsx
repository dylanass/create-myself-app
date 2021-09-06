import React, { useEffect } from "react";
import "./Audio.scss";
import usePersistFn from "@/components/hooks/usePersistFn";

export default function Audio() {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  const handlePlay = usePersistFn((el) => {
    const audio = document.querySelector(`#${el}`) as any;
    //@todo  The element has no supported sources.
    setTimeout(() => {
      audio.play();
    }, 5);
  });

  useEffect(() => {
    // const $ = (selector) => document.querySelector(selector);
    // const buttonContainer = $("#buttons");
    // const create = (element) => document.createElement(element);
    // sounds.forEach((sound) => {
    //   const btn = create("button");
    //   btn.textContent = sound;
    //   btn.type = "button";
    //   const audio = create("audio");
    //   audio.src = "./audio/" + sound + ".mp3";
    //   audio.id = sound;
    //   btn.addEventListener("click", () => {
    //     stopSounds();
    //     setTimeout(() => {
    //       $("#" + sound).play();
    //     }, 0);
    //   });
    //   buttonContainer.appendChild(btn);
    //   buttonContainer.insertAdjacentElement("beforebegin", audio);
    // });
    // function stopSounds() {
    //   sounds.forEach((sound) => {
    //     $("#" + sound).pause();
    //     $("#" + sound).currentTime = 0;
    //   });
    // }
  }, []);
  return (
    <div className="audio-wrapper">
      <div id="buttons">
        {sounds.map((el, index) => (
          <>
            <button onClick={() => handlePlay(el)}>{el}</button>
            <audio id={el} src={`./audio/${el}.mp3`} />
          </>
        ))}
      </div>
    </div>
  );
}
