import React, { useRef } from "react";
import Slider from "react-slick";
import { BiStar } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import lieslie from "public/maryJune-1.png";
import howard from "public/maryJune-2.png";
import admin from "public/maryJune-3.png";
import NextImage from "@/components/atom/NextImage/NextImage";

const ResponsiveSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const reviews = [
    {
      img: lieslie,
      name: "Leslie Alexander",
      rating: 5,
      review:
        "Join our ever-growing community of satisfied riders today! Download our app and experience a new level of transportation that's just a tap away.",
    },
    {
      img: howard,
      name: "Joseph Howard",
      rating: 5,
      review:
        "Join our ever-growing community of satisfied riders today! Download our app and experience a new level of transportation that's just a tap away.",
    },
    {
      img: admin,
      name: "Isah Hamza",
      rating: 4,
      review:
        "Join our ever-growing community of satisfied riders today! Download our app and experience a new level of transportation that's just a tap away.",
    },
  ];
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((item, idx) => (
          <div
            data-aos="fade-up"
            key={idx}
            className={` ${
              idx !== 0 && "hidden md:block"
            }  mr-5 bg-normal text-white p-8 sm:p-14 rounded-lg `}
          >
            <p className="text-base sm:text-lg font-semibold">{item.review}</p>
            <div className=" flex gap-3 sm:gap-5 mt-7 items-center">
              <NextImage className="h-24 w-[80px]" src={item.img} alt="img" />
              <div className="">
                <p className="font-bold text-base md:text-xl mb-2.5">
                  {item.name}
                </p>
                <div className="flex items-center gap-1 ">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <BiStar size={20} className="text-[#ff9505]" key={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div
        // data-aos=""
        className="flex justify-center items-center mt-12 gap-4"
      >
        <button
          onClick={previous}
          className="bg-normal w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowBackIosNew size={20} />
        </button>
        <button
          onClick={next}
          className="bg-normal w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
