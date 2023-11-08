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
  adaptiveHeight: true,
};

const Slider = ({ data, basePath, song }) => {
  return (
    <Slick {...settings} className="slider">
      {map(data, ({ id, image, name }) => {
        if (song) {
          return (
            <div
              key={id}
              className="slider__item"
              onClick={() => console.log("R")}
            >
              <div className="slider__item-block-play">
                <Image src={image} alt={name} />
                <Icon name="play circle outline" />
              </div>
              <h3>{name}</h3>
            </div>
          );
        }
        return (
          <Link to={`/${basePath}/${id}`} key={id} className="slider__item">
            <Image src={image} alt={name} />
            <h3>{name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
};

export default Slider;
