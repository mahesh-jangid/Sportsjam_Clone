import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Box, Divider, Image } from "@chakra-ui/react";

export const ImageSlider = ({ imagess }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 4,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    focusOnSelect: true,
  };
  return (
    <>
      <Box width={"7xl"} m={"auto"} mt={5}>
        <Divider orientation="horizontal" />
        <Slider {...settings}>
          {imagess.map((url) => (
            <Box mx={4}>
              <Image src={url} width={"100px"} />
            </Box>
          ))}
        </Slider>
        <Divider orientation="horizontal" />
      </Box>
    </>
  );
};
