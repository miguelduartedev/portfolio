import { Area } from "@components/common/types";
import { clsx } from "clsx";
import { FC } from "react";
import Slider from "react-slick";
import "./Illustration.scss";

const Illustration: FC<Area> = ({ area }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rows: 1,
    pauseOnHover: false,
  };

  return (
    <section className={clsx("media", area, area !== "main" && "-change")}>
      <img
        src="main_illustration.svg"
        className={clsx("main-illustration", area !== "main" && "-hide")}
        alt="An Illustration of a man in a home office greeting you inside"
      />
      <div className={clsx("aboutme", area === "aboutme" ? "-show" : "-hide")}>
        {area === "aboutme" && (
          <Slider {...settings}>
            <div>
              <div className="images me"></div>
            </div>
            <div>
              <div className="images hallstatt"></div>
            </div>
            <div>
              <div className="images porto"></div>
            </div>
            <div>
              <div className="images rome"></div>
            </div>
            <div>
              <div className="images vatican"></div>
            </div>

            <div>
              <div className="images stockholm"></div>
            </div>
            <div>
              <div className="images stockholm-2"></div>
            </div>
            <div>
              <div className="images rosendal"></div>
            </div>
            <div>
              <div className="images rosendal-2"></div>
            </div>
            <div>
              <div className="images copenhagen"></div>
            </div>
            <div>
              <div className="images luxembourg"></div>
            </div>
            <div>
              <div className="images seville"></div>
            </div>
            <div>
              <div className="images ronda"></div>
            </div>
            <div>
              <div className="images cordoba"></div>
            </div>
            <div>
              <div className="images bilbao"></div>
            </div>
            <div>
              <div className="images ireland"></div>
            </div>
            <div>
              <div className="images sintra"></div>
            </div>
            <div>
              <div className="images brussels"></div>
            </div>
            <div>
              <div className="images boston"></div>
            </div>
            <div>
              <div className="images concarneau"></div>
            </div>
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Illustration;
