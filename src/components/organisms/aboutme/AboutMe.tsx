import { Area } from "@components/common/types"
import clsx from "clsx"
import { FC } from "react"
import "./AboutMe.scss"

const AboutMe: FC<Area> = ({ area, setArea }) => (
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
      <p>Hello! </p>
      <p>
        As you may already know, my name is Miguel and I'm a Front End
        Developer. 👨🏻‍💻
      </p>
      <p>
        I was born and raised in Lisbon, Portugal. I enjoy travel, nature,
        politics, economics, video games and meeting people from all over the
        world.
      </p>
      <p>
        I graduated with a bachelor's degree in Information Technology from the
        University of Lisbon in 2019. Shortly after that, I started working at
        Talkdesk, where I have gathered over 3 years of working experience in
        Front End Development using the latest and most in demand tools.
      </p>
      <p>
        On the sides I've also worked on two projects:{" "}
        <a
          style={{ color: "white" }}
          href="https://interactive-maps.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-area-anchor"
        >
          Interactive Maps
        </a>{" "}
        and{" "}
        <a
          style={{ color: "white" }}
          href="https://ricardo-sousa.com/"
          target="_blank"
          rel="noreferrer"
          className="text-area-anchor"
        >
          Ricardo Sousa
        </a>
      </p>
      <p>
        You can access my resume{" "}
        <a
          style={{ color: "white" }}
          href="https://flowcv.com/resume/ufj2gfikvl"
          target="_blank"
          rel="noreferrer"
          className="text-area-anchor"
        >
          here
        </a>
        . Further details can be found on the Professional Experience area of
        this website.
      </p>
      <p>
        From a very young age, I was always interested in technology, and I was
        my family's go-to guy to fix a tech problem. As soon as I got access to
        the World Wide Web, I would play online games with friends and learn
        about different countries, with the Nordics in particular always peaking
        my interest due to how different the landscape and climate were from my
        home country.
      </p>
      <p>
        I have friends scattered throughout the world, and that's something that
        has shaped me. I don't see myself being defined or limited by the
        borders of the country that I happened to have been born in. 🌎
      </p>
      <h3 className="text-area-heading text-start mt-5 mb-4">
        TRAVEL & INTERESTS
      </h3>
      <p>
        As of May 2023 I've traveled to 24 countries in total. From North
        America (U.S. and Canada) to Western, Eastern, Northern and Southern
        Europe. Besides living in my home country of Portugal, I can say that
        I've also lived for a couple of months in the Netherlands and in
        Romania.
      </p>
      <p>
        At the top of my travel bucket list you'll find Australia, New Zealand,
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
        photography expert! In this page you'll have a slider with some of my
        personal favorite shots that I've taken in recent years. 📷
      </p>
      <p>
        In my teen years I experimented with music production, creating
        animations for storytelling and pixel art (even won a Habbo Hotel
        competition once!) but none of those stuck around. I also used to
        produce Gifs and Photosets on Tumblr back in the day.
      </p>
      <h3 className="text-area-heading text-start mt-5 mb-4">LANGUAGES</h3>
      <p>
        I only speak two languages fluently: Portuguese and English. Although
        it's worth pointing out that I can easily understand spoken and written
        Spanish.
      </p>
      <p>
        I'd like to learn more languages and I will definitely be motivated to
        learn the language of whichever country that I move to. 🤓
      </p>
      <p>
        Fun fact, I don't remember ever actively trying to learn English. I was
        just always somehow able to speak it. My theory is that I learned it by
        watching unsubtitled and undubbed Cartoon Network shows. So I just
        started connecting the images and the words that were spoken to the
        point were at the age of 6/8 I'd sometimes forget how to say certain
        words in Portuguese but I'd remember the English equivalent of the word.
        😅
      </p>
    </span>
  </section>
)

export default AboutMe
