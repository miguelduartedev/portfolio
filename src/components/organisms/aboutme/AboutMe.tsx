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
        area === "aboutme" && "-transitionIn",
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
        As you may already know, my name is Miguel and I'm a Full Stack/Front
        End Developer. 👨🏻‍💻
      </p>
      <p>I was born and raised in Lisbon 🇵🇹 but my new home is Helsinki 🇫🇮.</p>
      <p>
        From a very young age, I was always interested in technology, and I was
        my family's go-to guy to fix a tech problem. As soon as I got access to
        the World Wide Web, I would play online games with friends and learn
        about different countries, with the Nordics in particular always peaking
        my interest due to how different the landscape and climate were from my
        home country. I guess that led me to becoming a Developer living in the
        Nordics. 😊
      </p>
      <p>
        I have a bachelor's degree in Information Technology from the University
        of Lisbon in 2019. Shortly after that, I started working at Talkdesk,
        where I have gathered over 3 years of working experience in Front End
        Development using the latest and most in demand tools.
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
        Now going back to the fun stuff, as of Dec 2023 I've traveled to more
        than 25 countries in total. 🌎
      </p>{" "}
      <p>
        I've been all across Europe and to the U.S. and Cadada in North America.
        I've also lived in 4 countries: Portugal, the Netherlands, Romania and
        now Finland.
      </p>
      <p>
        I enjoy capturing my travel experiences but I'm by no means a
        photography expert! In this page you'll have a slider with some of my
        personal favorite shots that I've taken in recent years. 📷
      </p>
      <p>
        In my teen years I experimented with FL studio, animations, pixel art
        (even won a Habbo Hotel competition once!), etc. I also used to produce
        Gifs and Photosets on Tumblr back in the day. So as you can see,
        creating things on the internet has always been my passion! 😁
      </p>
    </span>
  </section>
)

export default AboutMe
