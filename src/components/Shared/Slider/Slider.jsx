import React, { useState, useEffect, useRef } from "react";
import { Image, Icon } from "semantic-ui-react";
import Slick from "react-slick";
import { map } from "lodash";
import { Link } from "react-router-dom";
import "./Slider.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  swipeToSlide: true,
  centerMode: true,
};

const Slider = ({ data, basePath }) => {
  return (
    <Slick {...settings} className="slider">
      {map(data, ({ id, image, name }) => {
        return (
          <Link to={`/${basePath}/${id}`} key={id} className="slider__item">
            <Image src={image} alt={name} />
            <Icon name="play circle outline" />
            <h3>{name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
};

export default Slider;
