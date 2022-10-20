import clsx from "clsx";
import "./experience.scss";

const Experience = ({ area, setArea }) => {
  return (
    <div
      className={clsx(
        "resume container",
        area === "experience" ? "-show-experience" : "d-none"
      )}
    >
      <p
        className="text-area-anchor text-start pointer pt-3"
        onClick={() => setArea("main")}
      >
        ← Back
      </p>
      <div className="row">
        <div className="col-12">
          <h1 className="text-area-heading text-center mt-1 mb-4">
            Experience & Education
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="text-area-heading text-start mt-1 mb-4">
            Professional Experience
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-3 col-xl-2">
          <div className="skill-bloc pointer -logos">
            <img className="w-100" src="./talkdesk.svg" alt="talkdesk" />
          </div>
        </div>
        <div className="col-8 col-md-9 col-xl-10 text-start">
          <p className="fw-bold mb-0">Front End Developer @ Web Team </p>
          <p className="detail mb-0">2019 - Present</p>
          <p className="mb-0">
            Worked closely with the design and back-end teams to develop and
            maintain UI components for our website's design system. Brought in
            new features such as an improved filtering system for our Website
            Resources. Continuously improved and integrated new tools to the
            code base such as Redux Tool Kit and Next.Js.
          </p>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-12">
          <h3 className="text-area-heading text-start mt-1 mb-4">Education</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-3 col-xl-2">
          <div className="skill-bloc pointer -logos ">
            <img
              className="logo"
              src="./ulisboa.svg"
              alt="university of lisbon"
            />
          </div>
        </div>
        <div className="col-8 col-md-9 col-xl-10 text-start">
          <p className="fw-bold mb-0">Bachelor's in Information Technology </p>
          <p className="detail mb-0">2015 - 2019 // EECC Grade: B</p>
          <p className="mb-0">
            University degree that follows the recommendations of the
            Association for Computing Machinery (ACM).{" "}
          </p>{" "}
          <p className="mb-0">
            {" "}
            Multiple topics were touched such as Development of Web Applications
            and Services, Object-Oriented Programming, Functional Programming,
            Analysis / Design / Construction of Software, Databases, User
            Interfaces, Distributed Applications, Unit Testing and Project
            Management among others.
          </p>
        </div>
      </div>
      <div className="row pt-5 pb-5">
        <div className="col-12 col-lg-5">
          <h3 className="text-area-heading text-start mt-1 mb-4">Main Stack</h3>
          <div className="round-container">
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./html.svg" alt="react" />
              <p className="mb-0">HTML5</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./css.svg" alt="react" />
              <p className="mb-0">CSS3</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./javascript.svg" alt="react" />
              <p className="mb-0">JavaScript</p>
            </div>
          </div>
          <h3 className="text-area-heading text-start mt-1 mb-4 pt-4">
            Frameworks
          </h3>
          <div className="round-container">
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./react.svg" alt="react" />
              <p className="mb-0">React</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./typescript.svg" alt="react" />
              <p className="mb-0">Typescript</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./nextjs.svg" alt="react" />
              <p className="mb-0">Next.js</p>
            </div>
          </div>
          <h3 className="text-area-heading text-start mt-1 mb-4 pt-4">
            Libraries
          </h3>
          <div className="round-container">
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./redux.svg" alt="react" />
              <p className="mb-0">Redux TK</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./sass.svg" alt="react" />
              <p className="mb-0">Sass/SCSS</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./emotion.png" alt="react" />
              <p className="mb-0">emotion</p>
            </div>
          </div>
          <h3 className="text-area-heading text-start mt-1 mb-4 pt-4">
            Minor Experience
          </h3>
          <div className="round-container">
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./python.svg" alt="react" />
              <p className="mb-0">Python</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./java.svg" alt="react" />
              <p className="mb-0">Java</p>
            </div>
            <div className="skill-bloc pointer">
              <img className="skill-logo" src="./php.svg" alt="react" />
              <p className="mb-0">PHP</p>
            </div>
            <div className="skill-bloc pointer mt-4">
              <img className="skill-logo" src="./jquery.svg" alt="react" />
              <p className="mb-0">jQuery</p>
            </div>
            <div className="skill-bloc pointer mt-4">
              <img className="skill-logo" src="./mysql.svg" alt="react" />
              <p className="mb-0">MySQL</p>
            </div>
            <div className="skill-bloc pointer mt-4">
              <img className="skill-logo" src="./r.svg" alt="react" />
              <p className="mb-0">R</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-1 pt-5 pt-lg-0">
          <h3 className="text-area-heading text-start mt-1 mb-4">Projects</h3>
          <div className="row">
            <div className="col-2">
              {" "}
              <div className="skill-bloc pointer -projects">
                <a
                  href="https://interactive-maps.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="skill-logo"
                    src="./interactive.svg"
                    alt="react"
                  />
                </a>
              </div>
            </div>
            <div className="col-10">
              <span className="text-start">
                <p className="fw-bold mb-0">Interactive Maps</p>
                <p className="detail mb-0">2022</p>
                <p className="mb-0">
                  Interactive Maps is a custom map making tool that I've worked
                  on out of passion for Maps, Geography and Geopolitics.{" "}
                </p>
                <p className="mb-0">
                  Developed with NextJS, Redux Tool Kit, SCSS and Bootstrap 5.
                </p>
                <p className="mb-0">Hosting by Vercel. </p>
                <p className="mb-0">
                  Using public API "Rest Countries" for accessing country data.
                </p>
              </span>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-2">
              {" "}
              <div className="skill-bloc pointer -projects">
                <a href="#" target="_blank" rel="noreferrer">
                  <img className="skill-logo" src="./miguel.svg" alt="react" />
                </a>
              </div>
            </div>
            <div className="col-10">
              <span className="text-start">
                <p className="fw-bold mb-0">My Portfolio Website</p>
                <p className="detail mb-0">2022</p>
                <p className="mb-0">
                  {" "}
                  Developed with React, SCSS and Bootstrap 5.
                </p>
                <p className="mb-0">Hosting provided by GitHub Pages.</p>
              </span>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-2">
              {" "}
              <div className="skill-bloc pointer -projects">
                <a
                  href="https://ricardo-sousa.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="skill-logo" src="./rs.svg" alt="react" />
                </a>
              </div>
            </div>
            <div className="col-10">
              <span className="text-start">
                <p className="fw-bold mb-0">Ricardo Sousa</p>
                <p className="detail mb-0">2020</p>
                <p className="mb-0">
                  ricardo-sousa.com is a portfolio website for a designer and
                  photographer based in Lisbon.
                </p>
                <p className="mb-0">
                  {" "}
                  Developed with Vanilla JavaScript, HTML5 and CSS3.
                </p>
                <p className="mb-0">
                  Hosting provided by GitHub Pages with GoDaddy being the domain
                  provider.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
