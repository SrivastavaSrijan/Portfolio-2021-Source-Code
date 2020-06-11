import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Cards.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PCjpg from "../Assets/Images/PC.jpg";
import PCwebp from "../Assets/Images/PC.webp";
import CPjpg from "../Assets/Images/CP.jpg";
import CPwebp from "../Assets/Images/CP.webp";
import EMjpg from "../Assets/Images/EM.jpg";
import EMwebp from "../Assets/Images/EM.webp";
import DLwebp from "../Assets/Images/DL.webp";
import DLjpg from "../Assets/Images/DL.jpg";
import PFwebp from "../Assets/Images/PF.webp";
import PFjpg from "../Assets/Images/PF.jpg";
class CardCarousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      lazyLoad: true,
      fade: false,
      initialSlide: 2,
      swipeToSlide: true,
      pauseOnHover: true,
      autoplay: false,
      focusOnSelect: true,
      speed: 500,
      autoplaySpeed: 2000,
      centerPadding: "60px",
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };
    return (
      <div className="container  mt-3">
        <Slider {...settings}>
          <Card
            index={0}
            color="warning"
            title="Highly Sensitive D Type LSPR Fiber Sensor"
            subtitle="Multi-platform Application"
            imgSrc={[CPjpg, CPwebp]}
            content={[
              "Constructed a biomedical sensor based on SPR using COMSOL Multiphysics.",
              "Compared the plasmonic coatings available in the market.",
              "Used nano-structures to achieve a high-sensitivity.",
            ]}
          />
          <Card
            index={1}
            color="success"
            title="Employee Management"
            subtitle="Multi-platform Application"
            imgSrc={[EMjpg, EMwebp]}
            content={[
              "Created two applications - one using the Android SDK and one using JavaFX.",
              "Generated fake values from a YAML file stores them into a relational database.",
              "Users can search, edit and delete employees. ",
            ]}
            links={[
              "https://drive.google.com/file/d/1m-S7Ow2FUCIpIxzGnItm4lIOQvnris4I/view",
              "https://github.com/SrivastavaSrijan/Employee-Management-Android-Port",
            ]}
          />
          <Card
            index={2}
            color="light"
            title="Pomodoro Clock"
            subtitle="PERN stack time management tool"
            imgSrc={[PCjpg, PCwebp]}
            content={[
              "Time management app to increase productivity and prevent burnout.",
              "Users can sync their data by registering on the app",
              "Displays random wallpapers and quotes by making API calls.",
            ]}
            links={[
              "https://srijansrivastava.tech/PomodoroClockHello/",
              "https://github.com/SrivastavaSrijan/Pomodoro-Clock-Source-Code",
            ]}
          />
          <Card
            index={3}
            color="danger"
            title="911 Calls"
            subtitle="Data Analytics Project"
            imgSrc={[DLjpg, DLwebp]}
            content={[
              "Engineered relevant data points through Numpy",
              "Cleaned and examined data points through Pandas to identify errors",
              "Generated graphs using Plotly and Seaborn to visualize the trends of 911 calls to identify key problem areas.",
            ]}
            links={[
              "https://github.com/SrivastavaSrijan/Data-Analytics-Viz-Projects/blob/master/911-Calls-Project/01-911%20Calls%20Data%20Capstone%20Project.ipynb",
            ]}
          />
          <Card
            index={5}
            color="primary"
            title="Personal Portfolio"
            subtitle="This website!"
            imgSrc={[PFjpg, PFwebp]}
            content={[
              "Made using React and many amazing libraries",
              "Used Bulma for consistent styling using Sass",
              "Used Web Tools for performance optimization",
            ]}
            links={[
              "https://github.com/SrivastavaSrijan/Portfolio-Source-Code",
            ]}
          />
        </Slider>
      </div>
    );
  }
}

export default CardCarousel;
