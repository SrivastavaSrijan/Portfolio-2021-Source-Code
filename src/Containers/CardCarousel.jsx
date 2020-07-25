import React, { Component } from 'react';
import Slider from 'react-slick';
import { ProjectCard } from '../Components/Cards/ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectData } from '../Data/projectData.js';

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
      centerPadding: '60px',
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
      <Slider {...settings}>
        {projectData.map(
          ({ index, title, color, subtitle, imgSrc, content, links }) => (
            <ProjectCard
              index={1}
              color={color}
              title={title}
              subtitle={subtitle}
              imgSrc={imgSrc}
              content={content}
              links={links}
            />
          )
        )}
      </Slider>
    );
  }
}

export default CardCarousel;
