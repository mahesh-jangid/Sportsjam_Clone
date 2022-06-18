// import LargeWithAppLinksAndSocial from "../../../components/Footer";
import Header from "../../../components/Navbar/Header";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Carousel } from "../Carousel";
import { Dropdown } from "../Navbar/Index";
import { Cards } from "../ProductCards/Products";
import { Section1 } from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import { Section4 } from "../Section4";
import Testimonial from "../Testimonial";

export const Home = () => {
  return (
    <>
      <Dropdown />
      <Carousel />
      <Cards />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Testimonial />
    </>
  );
};
