import React, { useState, useEffect, useRef } from "react";
import { Image, Icon } from "semantic-ui-react";
import Slick from "react-slick";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { usePlayer } from "../../../hooks";
import "./Slider.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
};

const Slider = ({ data, basePath, song }) => {
  const [size, setSize] = useState(0);
  const [loadCompleted, setLoadCompleted] = useState(false);
  const itemRef = useRef();

  const { playSong } = usePlayer();

  useEffect(() => {
    if (itemRef.current) {
      setSize(itemRef.current.clientWidth);
    }
  }, [loadCompleted]);

  return (
    <Slick {...settings} className="slider">
      {map(data, (item) => {
        const { id, image, name } = item;
        if (song) {
          return (
            <div
              key={id}
              className="slider__item"
              onClick={() => playSong(item, image)}
              ref={itemRef}
              onLoad={() => setLoadCompleted(true)}
            >
              <div className="slider__item-block-play">
                <Image src={image} alt={name} style={{ height: size }} />
                <Icon name="play circle outline" />
              </div>
              <h3>{name}</h3>
            </div>
          );
        }
        return (
          <Link
            to={`/${basePath}/${id}`}
            key={id}
            className="slider__item"
            ref={itemRef}
            onLoad={() => setLoadCompleted(true)}
          >
            <Image src={image} alt={name} style={{ height: size }} />
            <h3>{name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
};

export default Slider;
