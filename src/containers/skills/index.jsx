import { Line } from "rc-progress";
import React, { useState } from "react";
// import { FaGift } from "react-icons/fa";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {

  const [hrWishDisplayed, setHrWishDisplayed] = useState(false);

  const toggleHrWish = () => {
    setHrWishDisplayed((prev) => !prev);
  };

  return (
    <section id="skills" className="skills">
      {/* <PageHeaderContent
        headerText="My Skills"
        icon={<FaGift size={40} />}
      /> */}
      <PageHeaderContent
        headerText="My Skills"
        icon={
          <div className="iconContainer">
            {hrWishDisplayed && <div className="hrWishBox">I'm learning more skills</div>}
            <div><GiSkills size={40} onClick={toggleHrWish} className="infoIcon" /></div>
            {/* FaGift */}
          </div>
        }
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
              key={i}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
