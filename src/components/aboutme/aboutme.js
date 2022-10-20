import clsx from "clsx";
import "./aboutme.scss";

const AboutMe = ({ area, setArea }) => {
  return (
    <section
      className={clsx(`text-area ${area}`, area !== "aboutme" && "d-none")}
    >
      <span
        className={clsx(
          "text-aboutme pb-3",
          area === "aboutme" && "-transitionIn"
        )}
      >
        <p
          className="text-area-anchor pointer pt-3"
          onClick={() => setArea("main")}
        >
          ← Back
        </p>
        <h3 className="text-area-heading text-start mt-1 mb-4">ABOUT ME</h3>
        <p>Hello! As you may already know, my name is Miguel 👨🏻‍💻</p>
        <p>
          I'm a front-end developer born and raised in Lisbon. I graduated with
          an I.T. bachelor's degree from the University of Lisbon in 2019 and as
          of late October, 2022 I have 3 years of working experience at
          Talkdesk.
        </p>
        <p>
          On the sides I've also worked on two projects:{" "}
          <a
            style={{ color: "white" }}
            href="https://ricardo-sousa.com/"
            target="_blank"
            rel="noreferrer"
            className="text-area-anchor"
          >
            Ricardo Sousa
          </a>{" "}
          and{" "}
          <a
            style={{ color: "white" }}
            href="https://interactive-maps.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-area-anchor"
          >
            Interactive Maps
          </a>
        </p>
        <p>
          You'll find more details on my professional career on the Professional
          Experience area.
        </p>
        <p>
          {" "}
          Besides software development, I enjoy Travel, Geopolitics and{" "}
          <a
            style={{ color: "white" }}
            href="https://en.wikipedia.org/wiki/Germanic-speaking_world"
            target="_blank"
            rel="noreferrer"
            className="text-area-anchor"
          >
            Germanic countries
          </a>
          .{" "}
        </p>
        <p>
          Slightly cliché but I would consider myself a global citizen. I have
          friends scattered throughout the world and that's something that has
          deeply shaped my sense of self. I don't see myself being defined or
          limited by the borders of the country that I happened to have been
          born in.
        </p>
        <h3 className="text-area-heading text-start mt-5 mb-4">
          TRAVEL & INTERESTS
        </h3>
        <p>
          I've so far traveled to the U.S., Canada, Norway, Sweden, Denmark, The
          Netherlands, Belgium, Luxembourg, Ireland, Austria, France, Italy, The
          Vatican and Spain.
        </p>
        <p>
          At the top of my bucket list you'll find Australia, New Zealand,
          Japan, South Korea, Iceland, Chile/Argentina (Patagonia specifically).
        </p>
        <p>
          I love colder climates which may sound weird to some people. I'm
          actually quite tired of the constant beaming sun and heat of Lisbon. I
          find it beautiful when places have seasons that are quite bold.
          Flourishing springs, Warm summers, Cozy falls and Snowy winters.
        </p>
        <p>
          {" "}
          I enjoy capturing my travel experiences but I'm by no means a
          photography expert! In this page you'll have a slider with some of the
          favorite shots that I've taken 📷
        </p>
        <p>
          I've dabbled in music production, creating animations for storytelling
          and pixel art (even won a Habbo Hotel competition once!) but none of
          those stuck around. I also used to produce Gifs and Photosets on
          Tumblr back in the day.
        </p>
        <h3 className="text-area-heading text-start mt-5 mb-4">LANGUAGES</h3>
        <p>
          I only speak two languages fluently: Portuguese and English. Although
          it's worth pointing out that I can easily understand spoken and
          written Spanish.
        </p>
        <p>
          I'd like to learn another Germanic language someday. I already know a
          bit of Norwegian but not enough to have a conversation.
        </p>
        <p>
          Fun fact, I don't remember ever actively trying to learn English. I
          was just always somehow able to speak it. How? My theory is that I
          learned it by watching unsubtitled and undubbed Cartoon Network shows.
          So I just started connecting the images and the words that were spoken
          to the point were at the age of 6/8 I'd sometimes forget how to say
          certain words in Portuguese but I'd remember the English equivalent of
          the word. 😅
        </p>
      </span>
    </section>
  );
};

export default AboutMe;
