import { useEffect } from "react";
import "./SplashScreen.css";
import logo from "../../assets/images/auro.png"

export default function SplashScreen({onFinish, duration = 2200 }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), duration);
    return () => clearTimeout(t);
  }, [duration, onFinish]);

  return (
    <div className="auroSplash">
      <div className="auroSplash__grid" />
      <div className="auroSplash__mist" />

      <div className="portal">
        <span className="portal__ring portal__ring--1" />
        <span className="portal__ring portal__ring--2" />
        <span className="portal__ring portal__ring--3" />

        <div className="portal__core">
          {logo ? (
            <img className="portal__logo" src={logo} height={"100%"} width={"100%"} alt="Auro" />
          ) : (
            <div className="portal__logoFallback" />
          )}
        </div>

        {/* ðŸ”® energy orbs (unique loading replacement) */}
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>

      <div className="auroSplash__text">
        <h1 className="auroSplash__title">
          AURO <span>BUILDTECH</span>
        </h1>
        <p className="auroSplash__tag">Blueprint • Build • Finish</p>
      </div>
    </div>
  );
}
