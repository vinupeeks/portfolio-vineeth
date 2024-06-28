import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdOutlineWork, MdWorkOff } from "react-icons/md";
// import { PiPhoneCallBold } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './styles.scss';

const Resume = () => {

  const [hrWishDisplayed, setHrWishDisplayed] = useState(false);

  const toggleHrWish = () => {
    setHrWishDisplayed((prev) => !prev);
  };
  // const openResume = () => {
  //   window.open("path-to-your-cover-letter.pdf", "_blank"); // Replace with your resume URL or path
  // };

  return (
    <>
      <PageHeaderContent
        headerText="My Resume"
        icon={
          <div className="iconContainer">
            {hrWishDisplayed && <div className="hrWishBox">My career path</div>}
            <div>
              <MdWorkOff size={40} onClick={toggleHrWish} className="infoIcon" /></div>
          </div>
          // MdOutlineWork
        }
      />
      <section id="resume" className="resume">
        <div className="timelineContainer">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--yellow-theme-main-color)"
            >
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date={item.Date}
                  icon={<MdOutlineWork />}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--yellow-theme-main-color)',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--yellow-theme-main-color)"
            >
              {data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date={item.Date}
                  icon={<MdOutlineWork />}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--yellow-theme-main-color)',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        {/* Resume button below the Experience and Education sections */}
        {/* <div className="resumeButtonContainer">
          <div className="resumeButton" onClick={openResume}>
            <MdDescription className="resumeIcon" />
            <span className="resumeText">Resume</span>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Resume;
