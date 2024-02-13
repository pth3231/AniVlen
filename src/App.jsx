import { React, useState } from "react";
import "./App.css";

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const text_list = [
  "Wait what?",
  "Please, don't click no 🥲",
  "Babe, click yes please 😔",
  "Why you keep clicking no...",
  "I'm not gonna stop until you click yes 😡",
  "I'm gonna cry...",
  "...",
  "stop...",
  "Stop...",
  "STOP...",
];

export default function App() {
  const [stylingNo, setStylingNo] = useState({
    pos: "relative",
    x: 0,
    y: 0,
  });
  const [isDisp, setIsDisp] = useState(false);
  const [btnIdx, setBtnIdx] = useState(0);
  const [btnTxt, setBtnTxt] = useState("No");
  const padding = 100;

  function handleNo(e) {
    e.preventDefault();
    setStylingNo({
      pos: "fixed",
      x: randRange(padding, window.innerWidth - padding),
      y: randRange(0, window.innerHeight - 3 * padding),
    });
    if (btnIdx < text_list.length - 1) setBtnIdx(btnIdx + 1);
    setBtnTxt(text_list[btnIdx]);
  }

  function handleYes(e) {
    setIsDisp(true);
  }

  return !isDisp ? (
    <div className="frame">
      <div style={{ width: "50%", marginTop: "100px" }}>
        <div
          style={{
            height: 0,
            paddingBottom: "56.25%",
            position: "relative",
            width: "100%",
          }}
        >
          <iframe
            allowfullscreen=""
            height="100%"
            src="https://giphy.com/embed/BPC1Th5MXocobIIPSX/video"
            style={{ left: 0, position: "absolute", top: 0 }}
            width="100%"
          ></iframe>
        </div>
      </div>

      <h1>Do you wanna be my life-time partner?</h1>
      <div className="btn-group">
        <button className="btn btn-yes" onClick={(e) => handleYes(e)}>
          Yes
        </button>
        <button
          className="btn btn-no"
          onClick={(e) => handleNo(e)}
          style={{
            position: stylingNo.pos,
            left: `${stylingNo.x}px`,
            top: `${stylingNo.y}px`,
          }}
        >
          {btnTxt}
        </button>
      </div>
    </div>
  ) : (
    <div className="frame">
      <h1>Yayyy, I gotcha!</h1>
      <h3>You are my best Valentine, ever!</h3>
      <p>If one day, I could not be beside you, don't be sad! Just go ahead!</p>

      <div
        style={{
          width: "33%",
          height: 0,
          paddingBottom: "33%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/TTr3zADf3SiaLQJtcg"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <div
        style={{
          width: "10%",
          height: 0,
          paddingBottom: "10%",
          position: "fixed",
          top: "50px",
          left: "50px",
        }}
      >
        <iframe
          src="https://giphy.com/embed/i7hrCdOHfnDr46m5vv"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
