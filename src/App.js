import { useEffect, useReducer, useRef, useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Programming from "./Programming";
import Projects from "./Projects";
import "./styles.css";
import Testimonials from "./Testimonials";
import Work from "./Work";
import Typed from "typed.js";

export default function App() {
  // for useState
  const [education, seteducation] = useState(false);
  const [workhistory, setworkhistory] = useState(false);
  const [programming, setprogramming] = useState(false);
  const [projects, setprojects] = useState(true);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    // pasted this from github but will do with myself the same thing
    // const options = {
    // 	strings: [
    //     'Some <i>strings</i> are slanted',
    //     'Some <strong>strings</strong> are bold',
    //     'HTML characters &times; &copy;'
    //   ],
    //   typeSpeed: 50,
    //   backSpeed: 50,
    // };

    // // elRef refers to the <span> rendered below
    // typed.current = new Typed(el.current, options);

    // return () => {
    //   // Make sure to destroy Typed instance during cleanup
    //   // to prevent memory leaks
    //   typed.current.destroy();
    // }

    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎",
        "FrontEnd Developer 🧑‍💻",
        "Full Stack Web Developer 💻",
        "MERN Stack Developer 💻",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);

  // to trigger the only on thing and make other false

  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogramming(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }

  return (
    <div className="App">
      {/* Hero Section */}
      {/*for navbar */}
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center justify-content-center">
            Aamish
          </span>
          <div className="bars mx-2" onClick={() => setopennav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex  flex-rows bg-new px-9 py-2 navbar-new transition-all"
            : "d-flex  flex-rows bg-new px-9 py-2 navbar-fixed-new transition-all"
        }
      >
        <span className="brand-name">Mohammed Aamish Anwer</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#testimonials"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonial
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-5" id="home">
        {/* for herosection main text and image */}
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Mohammed</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className="Im-text-subheading">
                Knack of building web applications with front end and back end
                operations
              </span>
              {/* for buttons  */}
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire Me
                </a>
                <a
                  href="https://res.cloudinary.com/dcpte972l/image/upload/v1704966408/Mohammed_Aamish_Anwer_Resume_hx8qbm.pdf"
                  className="btn-get-resume"
                  target="_blank"
                >
                  Get Resume <i class="fa-solid fa-up-right-from-square"> </i>
                </a>
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* for Image part */}

            <div className="d-flex justify-content-center ">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dcpte972l/image/upload/v1680432518/ProfileeNew_zhcmfh.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      {/* About me section */}

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {" "}
            About Me{" "}
          </span>
          <span className="why-text-sub"> Why Choose Me? </span>
          {/* making a div for contain 2 things which will be in row */}
          <div className="row justify-content-center shadow-lg my-5">
            {/* now making 2 divs 1 for animation and 1 for text all */}
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_xeb8piyr.json"
                background="transparent"
                speed="1"
                style={{ width: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Experienced Full Stack Web Developer proficient in Reactjs and
                MERN stack. Seeking to enhance organizational growth through
                application of skills and expertise.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few Highlights</span>
                <span className="few-list">
                  <ul className="py-3">
                    <li>Full Stack Web Development</li>
                    <li>Html, Css, Bootstrap, javaScript & ReactJs</li>
                    <li>Interactive Front end as per the design</li>
                    <li>Node JS, Express, MongoDB (Backend Technologies)</li>
                    <li>Firebase, Netlify, Render, AWS</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}

      {/* Resume Section */}

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio details</span>

        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div
            className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row"
            // given flex-row bcz of icon and education text both are in row
          >
            <div className="d-flex flex-column bg-new text-white">
              {/* took flex-column for font icon icon's(4 icon and 4 text) and for texts */}
              <span className="icons-span">
                <i class="fa-solid fa-list-check"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-user-graduate"></i>
              </span>

              <span className="icons-span">
                <i class="fa-solid fa-code"></i>
              </span>
            </div>
            {/* now doing for 4 texts */}
            <div className="d-flex flex-column">
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setprojects, true)}
              >
                Projects
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setworkhistory, true)}
              >
                Work
              </span>
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(seteducation, true)}
              >
                Education
              </span>

              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => ChangeState(setprogramming, true)}
              >
                Programming
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {/* now using use state to show only 1 thing at a time */}

            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      {/*----------------------------------- Testimonial Part---------------------------------- */}

      <div className="testimonials-part my-5" id="testimonials">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonial</span>
          <span className="why-text-sub mb-5">
            What my clients say about me
          </span>
          <Testimonials />
        </div>
      </div>

      {/*------------------------------------------ Contact Section --------------------------------*/}

      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"> </div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
