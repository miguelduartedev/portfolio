import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./illustration.scss";

const Illustration = ({ area, setArea }) => {
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

  const sliderRef = useRef();

  useEffect(() => {
    if (area === "aboutme") {
      sliderRef.current.props = { ...settings, autoplay: true };
      sliderRef.current.slickGoTo(0);
    } else {
      sliderRef.current.props = { ...settings, autoplay: false };
    }
  }, [area, sliderRef]);

  return (
    <section className={clsx("media", area, area !== "main" && "-change")}>
      <img
        src="main_illustration.svg"
        className={clsx("main-illustration", area !== "main" && "-hide")}
        alt="An Illustration of a man in a home office greeting you in"
      />
      <div className={clsx("aboutme", area === "aboutme" && "-show")}>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <div className="images one"></div>
          </div>
          <div>
            <div className="images two"></div>
          </div>
          <div>
            <div className="images three"></div>
          </div>
          <div>
            <div className="images four"></div>
          </div>
          <div>
            <div className="images five"></div>
          </div>
          <div>
            <div className="images six"></div>
          </div>
          <div>
            <div className="images seven"></div>
          </div>
          <div>
            <div className="images eight"></div>
          </div>
          <div>
            <div className="images nine"></div>
          </div>
          <div>
            <div className="images ten"></div>
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
        </Slider>
      </div>
    </section>
  );
};

export default Illustration;
