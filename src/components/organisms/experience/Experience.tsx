import { Area } from '@components/common/types';
import clsx from 'clsx';
import { FC } from 'react';
import Skill from '../../atoms/skill';
import './Experience.scss';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../atoms/icon/Icon';

const Experience: FC<Area> = ({ area, setArea }) => {
  const skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Next.js',
    'Redux TK',
    'Node.js',
    'Express.js',
    'HTML5/CSS3',
    'Sass/SCSS',
    'Emotion',
    'MongoDB',
    'MySQL',
  ];
  return (
    <section
      className={clsx(
        'resume container',
        area === 'experience' ? '-show-experience' : 'd-none',
      )}
    >
      <p
        className="text-area-anchor text-start pointer pt-3"
        onClick={() => setArea('main')}
      >
        ← Back
      </p>
      <div className="row">
        <div className="col-12">
          <h1 className="text-area-heading text-center mt-1 mb-4">
            Skills & Experience
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <h3 className="text-area-heading text-start mt-1 mb-4">
            Professional Experience
          </h3>

          <div className="row skill-container ms-4 ms-sm-0 me-4 me-sm-0">
            <div className="col-12 col-md-3 col-xl-2 pb-4 pb-md-0 px-0">
              <Skill
                className="-min-height-120"
                overrideImgClass="max-width-90"
                alt="talkdesk"
                source="./talkdesk.svg"
              />
            </div>
            <div className="col-12 col-md-9 col-xl-10 text-start">
              <p className="fw-bold mb-0">Front End Developer @ Web Team </p>
              <p className="detail mb-0">Oct 2019 - Mar 2023</p>
              <p className="font-size-08 mb-0">
                Worked closely with the design and back-end teams to develop and
                maintain UI components for our website's design system. Brought
                in new features such as an improved filtering system for our
                Website Resources. Continuously improved and integrated new
                tools to the code base such as Redux Tool Kit and Next.Js.
              </p>
            </div>
          </div>

          <h3 className="text-area-heading text-start mt-1 mb-4 pt-5 ms-3 ms-sm-0">
            Education
          </h3>

          <div className="row skill-container ms-4 ms-sm-0 me-4 me-sm-0">
            <div className="col-12 col-md-3 col-xl-2 pb-4 pb-md-0 px-0">
              <Skill
                className="-min-height-120"
                overrideImgClass="max-height-92 max-width-90"
                alt="university of lisbon"
                source="./ulisboa.svg"
              />
            </div>
            <div className="col-12 col-md-9 col-xl-10 text-start">
              <p className="fw-bold mb-0">
                Bachelor's in Information Technology{' '}
              </p>
              <p className="detail mb-0">
                Sep 2015 - Jun 2019 // EECC Grade: B
              </p>
              <p className="font-size-08 mb-0">
                University degree that follows the recommendations of the
                Association for Computing Machinery (ACM).
              </p>
              <p className="font-size-08 mb-0">
                Multiple topics were touched such as Development of Web
                Applications and Services, Object-Oriented Programming,
                Functional Programming, Analysis / Design / Construction of
                Software, Databases, User Interfaces, Distributed Applications,
                Unit Testing and Project Management among others.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 offset-lg-1 pt-5 pt-lg-0">
          <h3 className="text-area-heading text-start mt-1 mb-4">
            Technologies I've worked with
          </h3>
          <div className="skill-container main-stack ms-4 ms-sm-0 me-4 me-sm-0">
            {skills.map((skill, index) => (
              <Skill
                className={clsx('bg-color-highlight', index > 2 && 'mt-4')}
                skill={skill}
              />
            ))}
          </div>
          <h3 className="text-area-heading text-start mt-5 mb-4">
            Certificates
          </h3>
          <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-052a513f-3141-43bb-8191-f6a516b84807.pdf" target="_blank" rel="noreferrer">
            <div className="skill-container -small ms-4 ms-sm-0 me-4 me-sm-0">
              <div className="row">
                <div className="col-2 d-flex justify-content-center">
                  <Icon
                    iconName={faArrowUpRightFromSquare}
                    className="align-self-center"
                  />
                </div>
                <div className="col-10 text-start">
                  <p className="font-size-08 fw-bold mb-0">
                    React - The Complete Guide
                  </p>
                  <p className="detail mb-0">Issued in 2023</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-107e2263-8055-4904-94ee-8cddeafb72b8.pdf" target="_blank" rel="noreferrer">
            <div className="skill-container mt-3 -small ms-4 ms-sm-0 me-4 me-sm-0">
              <div className="row">
                <div className="col-2 d-flex justify-content-center">
                  <Icon
                    iconName={faArrowUpRightFromSquare}
                    className="align-self-center"
                  />
                </div>
                <div className="col-10 text-start">
                  <p className="font-size-08 fw-bold mb-0">
                    The Complete Node.js Developer Course (3rd Edition)
                  </p>
                  <p className="detail mb-0">Issued in 2023</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="row pt-5 pb-5">
        <div className="col-12 pt-0">
          <h3 className="text-area-heading text-start mt-1 mb-4">Projects</h3>
          <a
            href="https://interactive-maps.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="align-self-center"
          >
            <div className="skill-container row ms-4 ms-sm-0 me-4 me-sm-0">
              <div className="col-12 col-md-2 d-grid pb-4 pb-md-0">
                <Skill
                  className="-projects"
                  alt="Interactive Maps"
                  source="./interactive.svg"
                />
              </div>
              <div className="col-12 col-md-10">
                <span className="text-start">
                  <p className="fw-bold mb-0">Interactive Maps</p>
                  <p className="detail mb-0">2022</p>
                  <p className="font-size-08 fw-bold mb-2">
                    Developed with React + NextJS, Redux Toolkit, React Query,
                    SCSS and Bootstrap.{' '}
                  </p>

                  <p className="font-size-08 mb-0">
                    Interactive Maps is a custom map making tool that I've
                    worked on out of passion for Maps, Geography and
                    Geopolitics. 🗺{' '}
                  </p>
                  <p className="font-size-08 mb-0">
                    This tool is geared towards producing and exporting maps
                    that showcase country related data such as GDP per capita,
                    Gini, HDI, etc. On a more fun note, it can also just be used
                    as a scratch map of the countries you've traveled to! ✈️
                  </p>
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://miguelduartedev.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
            className="align-self-center"
          >
            <div className="skill-container row mt-5 ms-4 ms-sm-0 me-4 me-sm-0">
              <div className="col-12 col-md-2 d-grid pb-4 pb-md-0">
                <Skill
                  className="-projects"
                  alt="Portfolio Website"
                  source="./miguel.svg"
                />
              </div>
              <div className="col-12 col-md-10">
                <span className="text-start">
                  <p className="fw-bold mb-0">My Portfolio Website</p>
                  <p className="detail mb-0">2022</p>
                  <p className="font-size-08 fw-bold mb-2">
                    Developed with React, TypeScript, SCSS and Bootstrap 5.
                  </p>
                  <p className="font-size-08 mb-0">
                    The web page that you're currently on! It's a single page
                    application to showcase myself. 😊
                  </p>
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/miguelduartedev/Task-Manager-API"
            target="_blank"
            rel="noreferrer"
            className="align-self-center"
          >
            <div className="skill-container row mt-5 ms-4 ms-sm-0 me-4 me-sm-0">
              <div className="col-12 col-md-2 d-grid pb-4 pb-md-0">
                <Skill
                  className="-projects"
                  alt="Tasl Manager API"
                  source="./taskApi.svg"
                />
              </div>
              <div className="col-12 col-md-10">
                <span className="text-start">
                  <p className="fw-bold mb-0">Task Manager API</p>
                  <p className="detail mb-0">2023</p>
                  <p className="font-size-08 fw-bold mb-2">
                    Developed with Node.js + Express.js, MongoDB + Mongoose
                  </p>
                  <p className="font-size-08 mb-0">
                    API routes that handle secure user authentication through
                    bcrypt and JSON web tokens, task CRUD, database connection,
                    emailing services, upload of user avatars, sorting, and
                    pagination of tasks through query parameters.
                  </p>
                  <p className="font-size-08 mb-0">
                    It was my first "freelance" experience. I've learned a lot
                    since then! 😄
                  </p>
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://ricardo-sousa.com/"
            target="_blank"
            rel="noreferrer"
            className="align-self-center"
          >
            <div className="skill-container row mt-5 ms-4 ms-sm-0 me-4 me-sm-0">
              <div className="col-12 col-md-2 d-grid pb-4 pb-md-0">
                <Skill
                  className="-projects"
                  alt="Ricardo Sousa"
                  source="./RS.svg"
                />
              </div>
              <div className="col-12 col-md-10">
                <span className="text-start">
                  <p className="fw-bold mb-0">Ricardo Sousa</p>
                  <p className="detail mb-0">2020</p>
                  <p className="font-size-08 fw-bold mb-2">
                    Developed with Vanilla JavaScript, HTML5 and CSS3.
                  </p>
                  <p className="font-size-08 mb-0">
                    ricardo-sousa.com is is a portfolio website for a designer
                    and photographer based in Lisbon.
                  </p>
                  <p className="font-size-08 mb-0">
                    It was my first "freelance" experience. I've learned a lot
                    since then! 😄
                  </p>

                  <p className="font-size-08 mb-0">
                    Hosting provided by GitHub Pages with GoDaddy being the
                    domain provider.
                  </p>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
