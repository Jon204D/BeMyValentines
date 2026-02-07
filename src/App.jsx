import { useState, useEffect, useMemo } from "react";
import confetti from "canvas-confetti";
import valentineQuestion from "./assets/valentineQuestion";
import sweetLines from "./assets/sweetLines";
import YesScreen from "./components/YesScreen";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [disableNoButton, setDisableNoButton] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const sweetLine = useMemo(() => {
    return sweetLines[currentQuestionIndex % sweetLines.length];
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex === 5) {
      const randomTop = Math.random() * 120 - 60;
      const randomLeft = Math.random() * 120 - 60;
      setNoButtonPosition({ top: randomTop, left: randomLeft });
    } else {
      setNoButtonPosition({ top: 0, left: 0 });
    }
  }, [currentQuestionIndex]);

  function handleYesClick() {
    setAccepted(true);
    setCurrentQuestionIndex(valentineQuestion.length - 1);

    // confetti burst (feels AMAZING)
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.65 } });
    setTimeout(
      () => confetti({ particleCount: 80, spread: 100, origin: { y: 0.7 } }),
      250,
    );
  }

  function handleNoClick() {
    if (currentQuestionIndex < valentineQuestion.length - 2) {
      setCurrentQuestionIndex((i) => i + 1);
    }
    if (currentQuestionIndex === valentineQuestion.length - 2) {
      setDisableNoButton(true);
    }
  }

  function handleNoMouseEnter() {
    if (currentQuestionIndex === 5) {
      const randomTop = Math.random() * 140 - 70;
      const randomLeft = Math.random() * 140 - 70;
      setNoButtonPosition({ top: randomTop, left: randomLeft });
    }
  }

  return (
    <div className="overlay">
      {!accepted ? (
        <>
          <img src="https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-cute-teddy-bear-holding-heart-valentine-s-day-design-clipart-illustration-png-image_15809051.png" />
          <div className="header">
            <h1>To The Love Of My Life</h1>
            <h2>{valentineQuestion[currentQuestionIndex].question}</h2>
          </div>
          <div className="buttons">
            <button className="yesButton" onClick={handleYesClick}>
              Yes
            </button>

            {currentQuestionIndex < valentineQuestion.length - 2 && (
              <button
                className="noButton"
                onClick={handleNoClick}
                onMouseEnter={handleNoMouseEnter}
                disabled={disableNoButton}
                style={{
                  position: "relative",
                  top: `${noButtonPosition.top}px`,
                  left: `${noButtonPosition.left}px`,
                  transition: "all 0.3s ease",
                }}
              >
                No
              </button>
            )}
          </div>
        </>
      ) : (
        <YesScreen coupleName="Baby" />
      )}
    </div>
  );
}

export default App;