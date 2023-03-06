import React, { useState } from "react";
import Styles from "./index.module.scss";

const Home = (props) => {
  const [showTitle, setShowTitle] = useState("");
  const phoneNumber = "+351913806437";
  const waText =
    "Hello, I am in contact with you through your Web Portfolio. I await an answer..";

  const styleSecondTitle = {
    background:
      "linear-gradient(90deg, hsla(190, 79%, 59%, 1) 0%, hsla(226, 50%, 65%, 1) 100%)",
  };
  const styleThirdTitle = {
    background:
      "linear-gradient(90deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%)",
  };
  const styleFourTitle = {
    background:
      "linear-gradient(90deg, hsla(13, 93%, 67%, 1) 0%, hsla(21, 91%, 73%, 1) 100%)",
  };

  return (
    <div className={Styles["container"]}>
      <div className={Styles["container-left"]}>
        <div className={Styles["welcome"]}>
          Welcome <br />
          {props.name}
        </div>
        <ul className={Styles["ul1"]}>
          <li className={Styles["li1"]} onClick={() => setShowTitle("who")}>
            Who am I?
          </li>

          <li className={Styles["li1"]} onClick={() => setShowTitle("skills")}>
            Skills
          </li>
          <li className={Styles["li1"]} onClick={() => setShowTitle("project")}>
            Projects
          </li>
          <li className={Styles["li1"]} onClick={() => setShowTitle("contact")}>
            Contact
          </li>
        </ul>
        <span
          className={Styles["span"]}
          onClick={() => window.location.reload()}
        >
          Back
        </span>
      </div>
      <div
        className={Styles["container-right"]}
        style={
          showTitle === "skills"
            ? styleSecondTitle
            : null || showTitle === "project"
            ? styleThirdTitle
            : null || showTitle === "contact"
            ? styleFourTitle
            : null
        }
      >
        {showTitle === "who" && (
          <div>
            <div className={Styles["title3"]}>¿WHO AM I?</div>
            <div className={Styles["descwho"]}>
              Hi I'm Franco, Argentine by birth. I currently live in Portugal,
              in the north. More precisely in Povoa de Varzim in Porto. I have
              immediate availability to work. I studied in "Argentina Program"
              by the Chamber of Commerce and Industry of Argentina. I've been
              working with Javascript in React together with sass and Figma for
              a year now.
            </div>
            <span>
              <img
                src="../../APLogo-20-20.png"
                alt="Argentina Programa"
                className={Styles["imgAp"]}
              ></img>
              <img
                src="../../cessipng.png"
                alt="Argentina Programa"
                className={Styles["imgAp"]}
              ></img>
            </span>
          </div>
        )}
        {showTitle === "skills" && (
          <div>
            <div className={Styles["title2"]}>SKILLS</div>
            <div className={Styles["containerSkills"]}>
              <div>
                <div className={Styles["descJavascript"]}>Javascript</div>
                <span>
                  <img
                    className={Styles["imgJavascript"]}
                    src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                    width="180"
                    alt="javascript vector logo "
                  />
                </span>
              </div>
              <div>
                <div className={Styles["descReact"]}>React</div>
                <span>
                  <img
                    className={Styles["imgReact"]}
                    src="../../logo192.png"
                    width="180"
                    alt="javascript vector logo "
                  />
                </span>
              </div>
              <div>
                <div className={Styles["descSass"]}>Sass</div>
                <span>
                  <img
                    className={Styles["imgSass"]}
                    src="../../sass.png"
                    width="180"
                    alt="javascript vector logo "
                  />
                </span>
              </div>
              <div>
                <div className={Styles["descGitHub"]}>GitHub</div>
                <span>
                  <img
                    className={Styles["imgGit"]}
                    src="../../github.png"
                    width="180"
                    alt="javascript vector logo "
                  />
                </span>
              </div>
            </div>
          </div>
        )}
        {showTitle === "project" && (
          <div>
            <div className={Styles["title2"]}>PROJECTS</div>
            <div className={Styles["containerSkills"]}>
              <div className={Styles["containerOmni"]}>
                <a
                  href="https://www.omnifitgym.com.ar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>Omnifit Gym</div>
                  <img
                    src="../../pfomni.png"
                    alt="Site OmnifitGym"
                    width={250}
                  ></img>
                </a>
                <div className={Styles["descriptionProjects"]}>
                  Website for a gym located in Argentina,
                  <br />
                  with 6 sections, method of payment integrapo by
                  <br /> MercadoPago with
                  <br />
                  Different forms of payment. Inquiry forms
                  <br /> and accession <br />
                  of partners with notifications to business mail.
                  <br />
                  Adapted for mobiles
                </div>
              </div>
              <div className={Styles["containerBoda"]}>
                <a
                  href="https://juliyfranco.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>Wedding</div>
                  <img
                    src="../../pfwedding.png"
                    alt="Site OmnifitGym"
                    width={250}
                  ></img>
                </a>
                <div className={Styles["descriptionProjects"]}>
                  Website wedding in Argentina,
                  <br />
                  with 6 sections, RSVP
                  <br /> connected to the bride and groom's Mail <br />
                  to notify each attendance.
                  <br />
                  Counter of remaining days for the party.
                  <br />
                  With image gallery.
                  <br />
                  Adapted for mobiles.
                </div>
              </div>
              <div className={Styles["containerBoda"]}>
                <a
                  href="https://portfolio-personal-francoarriola.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>Portfolio</div>
                  <img
                    src="../../portfoliomobile.png"
                    alt="PortfolioImg"
                    width={250}
                  ></img>
                </a>
                <div className={Styles["descriptionProjects"]}>
                  Personal portfolio. Developed in React.
                </div>
              </div>
            </div>
          </div>
        )}
        {showTitle === "contact" && (
          <div>
            <div className={Styles["title2"]}>CONTACT</div>
            <div className={Styles["descwho"]}>
              <ul className={Styles["ul2"]}>
                <span className={Styles["flex-icon"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <a
                    href={"https://wa.me/" + phoneNumber + "/?text=" + waText}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>(+351)913806437</li>
                  </a>
                </span>
                <span className={Styles["flex-icon"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <a
                    href="https://github.com/francoarriola"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <li>Git Hub</li>
                  </a>
                </span>
                <span className={Styles["flex-icon"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/franco-sebastian-arriola-871550240/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>Linkedin</li>
                  </a>
                </span>
                <span className={Styles["flex-icon"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <a
                    href="mailto:francosebastianarriola@gmail.com?Subject=Interest%20in%20your%20work"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>Mail</li>
                  </a>
                </span>
              </ul>
            </div>
          </div>
        )}
        {showTitle === "" && (
          <div className={Styles["title4"]}>Select one category</div>
        )}
      </div>
    </div>
  );
};

export default Home;
