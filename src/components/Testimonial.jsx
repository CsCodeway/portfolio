import React from "react";
import Slider from "react-slick";
import Testimonials from "./functions/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/avatar.jpg";
import img1 from "../assets/avatar-1.jpg";
import img2 from "../assets/avatar-2.jpg";
import img3 from "../assets/avatar-3.jpg";

const Testimonial = () => {
  const testimonialsData = [
    {
      image: img,
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse quas odio fugiat molestiae dolores sunt eos mollitia maiores sint.",
      p2: "Ux/Ui Designer",
      h2: "John Doe",
    },
    {
      image: img1,
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse quas odio fugiat molestiae dolores sunt eos mollitia maiores sint.",
      p2: "Web Designer",
      h2: "Reno",
    },
    {
      image: img2,
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse quas odio fugiat molestiae dolores sunt eos mollitia maiores sint.",
      p2: "App Design",
      h2: "Loreial",
    },
    {
      image: img3,
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse quas odio.",
      p2: "Ux/Ui Designer",
      h2: "Mark",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div name="testimonial" className="md:h-screen my-32 ">
      <div className="flex flex-col items-center justify-center md:pt-[200px]">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-[70%] grid items-center justify-center">
            <p name="testimonial">Testimonial</p>
            <h2 className="capitalize text-gray-900 text-2xl font-medium">
              What People Say About Me
            </h2>
            <p className="text-gray-500 mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsa, consequuntur a sint cumque sit adipisci aliquid voluptates.
              Qui, culpa!
            </p>
          </div>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index}>
                <Testimonials
                  img={testimonial.image}
                  p1={testimonial.p1}
                  p2={testimonial.p2}
                  h2={testimonial.h2}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
