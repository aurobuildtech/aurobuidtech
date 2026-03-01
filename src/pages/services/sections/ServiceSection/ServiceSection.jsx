import ViewDetails from "../../../../components/buttons/ViewDetails";
import "./serviceSections.css";
 

export default function ServiceSection({
  id,
  title,
  eyebrow,
  desc1,
  desc2,
  desc3,
  img,
}) {
  const isCollage = Array.isArray(img);

  return (
    <section id={id} className="ssWrap" style={{ scrollMarginTop: "95px" }}>
      <div className="ssGrid">
        {/* LEFT */}
        <div className="ssLeftCard">
          {eyebrow && (
            <div className="ssEyebrow">
              <span className="ssDot" />
              {eyebrow}
            </div>
          )}

          <h2 className="ssTitle">{title}</h2>

          <div className="ssTextWrap">
            {desc1 && <p className="ssText">{desc1}</p>}
            {desc2 && <p className="ssText">{desc2}</p>}
            {desc3 && <p className="ssText">{desc3}</p>}
          </div>
        </div>

        {/* RIGHT */}
        <div className="ssRight">
          <div className="ssImgCard" role="button" tabIndex={0}>
            {isCollage ? (
              <div className="ssCollage">
                <div className="ssBig">
                  <img src={img[0]} alt={`${title}-1`} />
                </div>

                <div className="ssSmallCol">
                  <div className="ssSmall">
                    <img src={img[1]} alt={`${title}-2`} />
                  </div>
                  <div className="ssSmall">
                    <img src={img[2]} alt={`${title}-3`} />
                  </div>
                </div>
              </div>
            ) : (
              <img className="ssSingleImg" src={img} alt={title} />
            )}
          </div>

          {/* ✅ NOW: opens correct details page */}
          <ViewDetails toId={id} />
        </div>
      </div>

      <hr className="ssDivider" />
    </section>
  );
}