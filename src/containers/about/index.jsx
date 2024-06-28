import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
import { FaDev, FaDatabase } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Vineeth K C",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: " Palakkad, Kerala",
  },
  {
    label: "Email",
    value: "vinuvineeth228@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8075 542 914",
  },
];

const jobSummary =
  "Seasoned and independent Full Stack Developer With 6 months of internship experience and a solid grasp of MongoDB, Express.js, React.js, and Node.js, I excel in crafting immersive web experiences. From proactive feature optimization to meticulous debugging, I prioritize user engagement. Passionate about UI design, I ensure adherence to design principles for seamless implementation. Ready to contribute my skills to your projects with enthusiasm and dedication.";

const About = () => {
  const [hrWishDisplayed, setHrWishDisplayed] = useState(false);

  const toggleHrWish = () => {
    setHrWishDisplayed((prev) => !prev);
  };

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="VINEETH KC"
        icon={
          <div className="iconContainer">
            {/* {hrWishDisplayed && <div className="hrWishBox">Hello HR, Nice to meet you!</div>} */}
            {hrWishDisplayed && <div className="hrWishBox">Hello, May you find a hidden gem!</div>}
            <div><FaGift size={40} onClick={toggleHrWish} className="infoIcon" /></div>
          </div>
        }
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            {/* <h3>Front End Developer</h3> */}
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaNodeJs size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;