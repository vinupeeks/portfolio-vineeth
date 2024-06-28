import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { MdDescription } from 'react-icons/md';
// import PageHeaderContent from '../../components/pageHeaderContent';
// import { Animate } from 'react-simple-animate';
// import { useNavigate } from 'react-router-dom';
import './styles.scss';

const ProfileLinks = () => {
    // const navigate = useNavigate();
    const openLinkedInProfile = () => {
        window.open("https://www.linkedin.com/in/vineethkc/", "_blank");
        // window.location.href = 'https://www.linkedin.com/in/vineethkc/';
    };

    const openGithubProfile = () => {
        // window.open("https://github.com/vinupeeks/", "_blank");
        window.location.href = 'https://github.com/vinupeeks/';
    };

    // const openResume = () => {
    //     window.open("path-to-your-cover-letter.pdf", "_blank"); // Replace with your cover letter URL or path
    //     // window.location.href = 'https://github.com/vinupeeks/';
    // };

    // const handleNavigateToContactMePage = () => {
    //     navigate("/contact");
    //     // (123);
    //     // window.open('https://drive.google.com/file/d/1GuYdJfv2CAewmcFnk3ZayjHLcMGkS2m3/view', '_blank');
    //     // window.location.href = 'https://drive.google.com/file/d/1GuYdJfv2CAewmcFnk3ZayjHLcMGkS2m3/view';
    // };

    return (
        <section className="profileSection">
            {/* <PageHeaderContent headerText="My Profiles" /> */}
            {/* <br /> */}
            {/* <PageHeaderContent
        headerText="My Skills"
        icon={<FaGift size={40} />}
      /> */}
            <div className="profileLinks">
                <div className="profileLinks__item" onClick={openLinkedInProfile}>
                    <FaLinkedin className="profileIcon" />
                    <span className="profileButton">LinkedIn Profile</span>
                </div>
                <div className="profileLinks__item" onClick={openGithubProfile}>
                    <FaGithub className="profileIcon" />
                    <span className="profileButton">GitHub Profile</span>
                </div>
                {/* <div className="profileLinks__item" onClick={openResume}>
                    <MdDescription className="profileIcon" />
                    <span className="profileButton">Resume</span>
                </div> */}
            </div>
            {/* <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(550px)",
                }}
                end={{
                    transform: "translatex(0px)",
                }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Contact Me</button>
                </div>
            </Animate> */}
        </section>
    );
};

export default ProfileLinks;
