import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import logo from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 5000, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, <br />I Am <br /> Dr Rajesh Bhojwani
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "A Healer",
                "Medical Marvel",
                "A Life Saver",
                "Caring Clinician",
              ],
              autoStart: true,
              loop: true,

              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:rajeshbhojwani@docsindia.in">Book an Appointment</a>
            <a href="#work">
              Work <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              {ratio < 2.2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
              +
            </p>
            <span>International Client Network</span>
          </article>

          <aside>
            <article>
              <p>
                {ratio < 2.2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  ></motion.span>
                )}
                +
              </p>
              <span>Patients Treated</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>rajeshbhojwani@docsindia.in</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={logo} alt="Dr-Rajesh" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
