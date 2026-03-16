import { useEffect, useState } from "react";
import "./FestiveOfferModal.css"
import offerpic from "../../assets/projects/offerImg.png";

export default function FestiveOfferModal({ open, onClose, onProceed }) {
  const [revealContent, setRevealContent] = useState(false);

  useEffect(() => {
    if (!open) {
      setRevealContent(false);
      return;
    }

    const timer = setTimeout(() => {
      setRevealContent(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    onClose?.();
    onProceed?.();
  };

  return (
    <div className="offerBackdrop" onClick={handleClose}>
      <div
        className={`offerModalWrap ${revealContent ? "revealed" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="offerCloseBtn"
          onClick={handleClose}
          aria-label="Close offer popup"
        >
          ✕
        </button>

        {!revealContent && (
          <div className="giftStage">
            <div className="spark spark1"></div>
            <div className="spark spark2"></div>
            <div className="spark spark3"></div>
            <div className="spark spark4"></div>

            <div className="giftBoxWrap">
              <div className="giftGlow"></div>
              <div className="giftLid"></div>
              <div className="giftBox"></div>
              <div className="giftRibbonVertical"></div>
              <div className="giftRibbonHorizontal"></div>
              <div className="giftBow left"></div>
              <div className="giftBow right"></div>
            </div>

            <p className="giftIntroText">Unwrapping festive offer...</p>
          </div>
        )}

        {revealContent && (
          <div className="offerContent">
            <div className="offerImageWrap">
              <img src={offerpic} alt="Navratri Offer" className="offerImage" />
            </div>

            <div className="offerTextBlock">
              <span className="offerBadge">Festive Offer</span>

              <h2>Celebrate Navratri with Yugen Infra!</h2>

              <p>
                Grab exciting festive benefits like <strong>20g Gold Coin</strong>,
                <strong> iPhone 17 Pro</strong>, <strong>Area Discount</strong> and
                <strong> up to 12% Fixed Rental</strong>.
              </p>

              <p className="offerHighlight">
                Offer valid <strong>19th – 27th March</strong> only. Book your dream
                property today!
              </p>

              {/* <div className="offerActions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClose}
                >
                  Explore Offer
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleClose}
                >
                  Maybe Later
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}