import { useEffect, useMemo, useState } from "react";
import "../styles/YesScreen.css";

// Later, replace these with your real images:
import photo1 from "../assets/image/01.jpeg";
import photo2 from "../assets/image/02.jpeg";
import photo3 from "../assets/image/03.jpeg";
import photo4 from "../assets/image/04.jpeg";

function YesScreen({ coupleName = "My Love" }) {
  const slides = useMemo(
    () => [
      { src: photo1, caption: "My favorite smile." },
      { src: photo2, caption: "My favorite memories." },
      { src: photo3, caption: "My favorite person." },
      { src: photo4, caption: "My forever." },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Auto-advance (optional)
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  const active = slides[index];

  return (
    <div className="yesWrap">
      <div className="yesCard">
        <div className="yesTitle">
          <h1>To The Love Of My Life</h1>
          <p className="yesSubtitle">
            I’m so happy you said yes, {coupleName}. I choose you — always. ❤️
          </p>
        </div>

        <div className="gallery">
          <div className="photoFrame">
            <img key={active.src} className="photo" src={active.src} alt="Us" />
          </div>

          <div className="galleryFooter">
            <p className="caption">{active.caption}</p>

            <div className="dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>

            <div className="navBtns">
              <button
                className="navBtn"
                onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
              >
                ◀
              </button>
              <button
                className="navBtn"
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <div className="loveNote">
          <p>
            Thank you for being my best friend, my peace, and my answered prayer.
            Here’s to more laughs, more grace, and a lifetime of us. 💞
          </p>
        </div>
      </div>
    </div>
  );
}

export default YesScreen;