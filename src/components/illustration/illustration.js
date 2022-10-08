import { clsx } from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./illustration.scss";

const Illustration = ({ area, setArea }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rows: 1,
  };
  return (
    <section className={clsx("media", area, area !== "main" && "-change")}>
      <img
        src="main_illustration.svg"
        className={clsx("main-illustration", area !== "main" && "-hide")}
        alt="An Illustration of a man in a home office greeting you in"
      />
      <div className={clsx("aboutme", area === "aboutme" && "-show")}>
        <Slider {...settings}>
          <div>
            <div className="images one"></div>
          </div>
          <div>
            <div className="images two"></div>
          </div>
          <div>
            <div className="images three"></div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Illustration;
