import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
// import { FaGift } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
// import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.png";
import ImageSeven from "../../images/image7.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Books Store App",
    link: "",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Cofee Shop design",
    image: ImageFive,
    link: "",
  },
  {
    id: 2,
    name: "Translator App",
    image: ImageSeven,
    link: "https://vinupeeks-translator-wb.netlify.app/",
  },
  {
    id: 2,
    name: "Ecommerce",
    image: ImageSix,
    link: "",
  },
  {
    id: 3,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hrWishDisplayed, setHrWishDisplayed] = useState(false);

  const toggleHrWish = () => {
    setHrWishDisplayed((prev) => !prev);
  };

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={
          <div className="iconContainer">
            {hrWishDisplayed && <div className="hrWishBox">Developing a billing software</div>}
            <div><FaLaptopCode size={40} onClick={toggleHrWish} className="infoIcon" /></div>
          </div>
        }
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                {/* <a href="javascript:void(0)"> */}
                  <LazyLoadImage alt="dummy data" src={item.image} />
                {/* </a> */}
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {/* <a href={item.link} target="_blank" rel="noopener noreferrer"> */}
                    {/* <button>Visit</button> */}
                    {/* </a> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
