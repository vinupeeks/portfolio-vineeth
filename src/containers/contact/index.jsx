import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import ProfileLinks from "../profile";
import "./styles.scss";

const Contact = () => {
  const [hrWishDisplayed, setHrWishDisplayed] = useState(false);
  const handleTap = (event) => {
    if (event.detail === 1) {
      // Single tap action
      // console.log("Single tap action!");
      setTimeout(() => {
        // Only trigger single tap if double tap is not detected
        if (event.detail === 1) {
          setHrWishDisplayed((prev) => !prev);
        }
      }, 250); // Delay slightly less than double tap timeout
    } else if (event.detail === 2) {
      // Double tap action
      // console.log("Double tap action!");
      // alert("Double tap action triggered!");
      // window.location.href = "mailto:vinuvineeth228@gmail.com?subject=Contact%20from%20Portfolio";
      const subject = encodeURIComponent("Contact from Portfolio");
      const body = encodeURIComponent("Hello Vineeth,");
      window.location.href = `mailto:vinuvineeth228@gmail.com?subject=${subject}&body=${body}`;
      setHrWishDisplayed((prev) => !prev);
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+918075542914";
    window.location.href = `tel:${phoneNumber}`;
  };

  const [emailDetails] = useState({
    subject: "Contact from Portfolio",
    body: "Hello Vineeth,"
  });

  const createMailToLink = () => {
    return `mailto:vinuvineeth228@gmail.com?subject=${encodeURIComponent(emailDetails.subject)}&body=${encodeURIComponent(emailDetails.body)}`;
  };

  return (
    <>
      <PageHeaderContent
        headerText="Contact Me"
        icon={
          <div className="iconContainer">
            {hrWishDisplayed && <div className="hrWishBox">Double tap for a Telegram</div>}
            <div><MdOutlinePhoneForwarded size={40} onClick={handleTap} className="infoIcon" /></div>
            {/* toggleHrWish */}
          </div>
        }
      />
      <section id="contact" className="contact">
        <ProfileLinks />
        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0.5}
            start={{
              opacity: 0,
            }}
            end={{
              opacity: 1,
            }}
          >
            <div className="contact__content__email">
              <p className="contact__content__header-text">If you would like to get in touch, please email me at :</p>
              {/* <a href="mailto:vinuvineeth228@gmail.com" className="contact__email-link"> */}
              <a href={createMailToLink()} className="contact__email-link">
                vinuvineeth228@gmail.com
              </a><br />
              <p className="contact__content__header-text">If you prefer, you can also call me at:</p>
              <span className="contact__email-link" onClick={handlePhoneClick}>+91 8075 542 914</span>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Contact;
