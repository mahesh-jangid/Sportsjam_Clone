import Header from "../../../components/Navbar/Header";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Carousel } from "../Carousel";
import { ImageSlider } from "../Carousel2";
import { Dropdown } from "../Navbar/Index";
import { Cards } from "../ProductCards/Products";
import { Section1 } from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import { Section4 } from "../Section4";
import Testimonial from "../Testimonial";

const imagess = [
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-33.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-05.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-07.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-08.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-10.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-11.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-15.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-16.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-20.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-23.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-25.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-29.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-28.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-38.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-40.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-43.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-44.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-48.jpg",
  "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brand-logo-49.jpg",
];

export const Home = () => {
  return (
    <>
      <Dropdown />
      <Carousel />
      <Cards />
      <Section1 />
      <Section2 />
      <Section3 />
      <ImageSlider imagess={imagess} />
      <Section4 />
      <Testimonial />
    </>
  );
};
