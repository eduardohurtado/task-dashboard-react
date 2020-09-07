import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import "./lol.scss"; //This is my "placeholder"

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      // placeholder="lol"
      effect="blur"
    />
  </div>
);

export default MyImage;
