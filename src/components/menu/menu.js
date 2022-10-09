import clsx from "clsx";
import SocialMedia from "../socialmedia/socialmedia";
import "./menu.scss";

const Menu = ({ area, setArea }) => {
  return (
    <section className={`text-area ${area}`}>
      <h1
        className={clsx(
          "text-area-heading mb-4",
          area !== "main" && "-transitionOut"
        )}
      >
        Welcome!
      </h1>
      <h3
        className={clsx(
          "text-area-heading main",
          area !== "main" && "-transitionOut"
        )}
      >
        <span className="anchor main" onClick={() => setArea("aboutme")}>
          About Me
        </span>
      </h3>
      <h3
        className={clsx(
          "text-area-heading main",
          area !== "main" && "-transitionOut"
        )}
      >
        <span className="anchor main" href="#professional-experience">
          Professional Experience
        </span>
      </h3>
      <SocialMedia {...{ area }} />

      <span
        className={clsx(
          "text-aboutme",
          area === "aboutme" ? "-transitionIn" : "-opacity-0"
        )}
      >
        <h3 className="text-area-heading mt-1 mb-4">ABOUT ME</h3>
        <p>Hello! As you may already know, my name is Miguel. </p>
        <p>
          Truth be told, that is actually my second name. It's the name that my
          family and closest friends have always used. Nonetheless if you want
          to call me by my first name (Luís) that's fine too.
        </p>{" "}
        <p>
          I'm a 26 year old Portuguese national, and therefore, a European Union
          citizen. 🇵🇹 🇪🇺
        </p>
        <p>
          {" "}
          I enjoy Geography, Geopolitics, Travel and{" "}
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
          I know, It's cliché but I would consider myself a global citizen. I
          have friends scattered throughout the world and that's something that
          has deeply shaped my sense of self.
        </p>
        <h3 className="text-area-heading mt-5 mb-4">HOBBIES</h3>
        <p>
          I enjoy producing content on the web. Currently that's expressed
          through Web Development, Photography and Reels but I might expand in
          the future.
        </p>
        <p>
          {" "}
          I enjoy capturing my travel experiences but I'm not a photography
          expert (in fact don't tell anyone but I take all my photos on auto).
        </p>
        <p>
          In this page you'll have a slider with some of the favorite shots that
          I've taken.
        </p>
        <p>
          I've dabbled in music production, creating animations for storytelling
          and pixel art (even won a Habbo Hotel competition once!) but none of
          those stuck around. I also used to produce Gifs and Photosets on
          Tumblr back in the day.
        </p>
        <h3 className="text-area-heading mt-5 mb-4">TRAVEL</h3>
        <p>
          I've so far traveled to the U.S., Canada, Norway, Sweden, Denmark, The
          Netherlands, Belgium, Luxembourg, Ireland, Austria, France, Italy and
          Spain.
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
        <h3 className="text-area-heading mt-5 mb-4">LANGUAGES</h3>
        <p>
          I only speak two languages fluently: Portuguese and English. Although
          I can easily understand spoken and written Spanish.
        </p>
        <p>I'd like to learn a second Germanic language someday.</p>
        <p>
          Fun fact, I don't remember ever actively trying to learn English. I
          was just always somehow able to speak it. How? My theory is that I
          learned it by watching unsubtitled and undubbed Cartoon Network shows.
          So I just started connecting the images and the words that were spoken
          to the point were at the age of 6/8 I'd sometimes forget how to say
          certain words in Portuguese but I'd remember the English equivalent of
          the word. 😅
        </p>
        <h3 className="text-area-heading mt-5 mb-4">CAREER</h3>
        <p>
          From a young age I've always been interested in computers. I used to
          participate in Habbo Hotel BR/PT pixel art competitions, altering
          pixel by pixel a image on paint. One time my submission was one of the
          winners!
        </p>
        <p>
          I did however find a medium where I could produce content and that was
          Front-End development. I'm a visual person. But also an analytical
          person. A visual problem solver.
        </p>
        <p>
          So in 2015 I got accepted to the University of Lisbon where I did a
          bachelor's degree in I.T. and did a minor (30 ECTS) in Biology and
          BioInformatics.
        </p>
        <p>
          Shortly after finishing my degree I started applying for companies in
          Portugal that best fit my criteria. One of those was Talkdesk, one of
          Portugal's top unicorns. Started off as a Hybrid worker but after the
          pandemic I became a remote worker and I've since become an enthusiast
          in remote work and digital nomad lifestyle.
        </p>
        <p>
          I've been applying and improving my skills at Talkdesk for 3 years
          now.
        </p>
        <p>
          Work closely with design and back-end teams to develop and maintain UI
          components for our website's design system. Our Stack has evolved
          throughout the years as we've been continuously adapting the best
          tools and practices in the field. Our current stack is React,
          TypeScript, Redux (Toolkit), NextJS, Sass, HTML5, Bootstrap etc.
        </p>
        <p>
          Besides developing my tech skill at Talkdesk, I'd like to highlight
          the enriching experience of working with a truly global team. Our Web
          team in particular has very close collaboration with teams that span
          the U.S. all the way from New England, to Texas and California.
        </p>
        <p>
          I would like to one day look back at my career and say that I've had a
          global career. Or at least a trans-atlantic career.
        </p>
      </span>
    </section>
  );
};

export default Menu;
