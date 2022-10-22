import { Area } from "@components/common/types";
import clsx from "clsx";
import { FC } from "react";
import Skill from "../../atoms/skill";
import "./Experience.scss";

const Experience: FC<Area> = ({ area, setArea }) => (
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
        <Skill
          className="-min-height-120"
          overrideImgClass="w-100"
          alt="talkdesk"
          source="./talkdesk.svg"
        />
      </div>
      <div className="col-8 col-md-9 col-xl-10 text-start">
        <p className="fw-bold mb-0">Front End Developer @ Web Team </p>
        <p className="detail mb-0">2019 - Present</p>
        <p className="mb-0">
          Worked closely with the design and back-end teams to develop and
          maintain UI components for our website's design system. Brought in new
          features such as an improved filtering system for our Website
          Resources. Continuously improved and integrated new tools to the code
          base such as Redux Tool Kit and Next.Js.
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
        <Skill
          className="-min-height-120"
          overrideImgClass="max-height-92"
          alt="university of lisbon"
          source="./ulisboa.svg"
        />
      </div>
      <div className="col-8 col-md-9 col-xl-10 text-start">
        <p className="fw-bold mb-0">Bachelor's in Information Technology </p>
        <p className="detail mb-0">2015 - 2019 // EECC Grade: B</p>
        <p className="mb-0">
          University degree that follows the recommendations of the Association
          for Computing Machinery (ACM).
        </p>
        <p className="mb-0">
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
          <Skill skill="HTML5" source="./html.svg" />
          <Skill skill="CSS3" source="./css.svg" />
          <Skill skill="JavaScript" source="./javascript.svg" />
        </div>
        <h3 className="text-area-heading text-start mt-1 mb-4 pt-4">
          Frameworks
        </h3>
        <div className="round-container">
          <Skill skill="React" source="./react.svg" />
          <Skill skill="Typescript" source="./typescript.svg" />
          <Skill skill="Next.js" source="./nextjs.svg" />
        </div>
        <h3 className="text-area-heading text-start mt-1 mb-4 pt-4">
          Libraries
        </h3>
        <div className="round-container">
          <Skill skill="Redux TK" source="./redux.svg" />
          <Skill skill="Sass/SCSS" source="./sass.svg" />
          <Skill skill="Emotion" source="./styled.svg" />
        </div>
        <h3 className="text-area-heading text-start mt-1 mb-4 pt-4">
          Minor Experience
        </h3>
        <div className="round-container">
          <Skill skill="Python" source="./python.svg" />
          <Skill skill="Java" source="./java.svg" />
          <Skill skill="PHP" source="./php.svg" />
          <Skill className="mt-4" skill="jQuery" source="./jquery.svg" />
          <Skill className="mt-4" skill="MySQL" source="./mysql.svg" />
          <Skill className="mt-4" skill="R" source="./r.svg" />
        </div>
      </div>
      <div className="col-12 col-lg-6 offset-lg-1 pt-5 pt-lg-0">
        <h3 className="text-area-heading text-start mt-1 mb-4">Projects</h3>
        <div className="row">
          <div className="col-2">
            <a
              href="https://interactive-maps.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Skill
                className="-projects"
                alt="Interactive Maps"
                source="./interactive.svg"
              />
            </a>
          </div>
          <div className="col-10">
            <span className="text-start">
              <p className="fw-bold mb-0">Interactive Maps</p>
              <p className="detail mb-0">2022</p>
              <p className="mb-0">
                Interactive Maps is a custom map making tool that I've worked on
                out of passion for Maps, Geography and Geopolitics.{" "}
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
        <div className="row pt-5">
          <div className="col-2">
            <a
              href="https://luisconceicaodev.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <Skill
                className="-projects"
                alt="Portfolio Website"
                source="./miguel.svg"
              />
            </a>
          </div>
          <div className="col-10">
            <span className="text-start">
              <p className="fw-bold mb-0">My Portfolio Website</p>
              <p className="detail mb-0">2022</p>
              <p className="mb-0">
                Developed with React, TypeScript, SCSS and Bootstrap 5.
              </p>
              <p className="mb-0">Hosting provided by GitHub Pages.</p>
            </span>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-2">
            <a
              href="https://ricardo-sousa.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Skill
                className="-projects"
                alt="Ricardo Sousa"
                source="./rs.svg"
              />
            </a>
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

export default Experience;
