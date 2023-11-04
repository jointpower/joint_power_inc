import React, { Component } from "react";
import Slider from "react-slick";

import lieslie from "../../assets/leslie.png";
import howard from "../../assets/howard.png";
import admin from "../../assets/admin.png";
import { BiSolidStar } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      //   autoplay: true,
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
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {reviews.map((item, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className={`${
                idx !== 0 && "hidden md:block"
              }  bg-[#fafafa] p-8 sm:p-14 rounded-lg text-black `}
            >
              <p className="text-base sm:text-lg font-semibold">
                {item.review}
              </p>
              <div className="flex gap-3 sm:gap-5 mt-7 items-center">
                <img className="w-[80px]" src={item.img} alt="img" />
                <div className="">
                  <p className="font-bold text-base md:text-xl mb-2.5">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-1 ">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <BiSolidStar
                        size={20}
                        className="text-[#ff9505]"
                        key={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div data-aos='fade-up' className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={this.previous}
            className="border border-white w-14 aspect-square rounded-full grid place-content-center"
          >
            <MdOutlineArrowBackIosNew size={20} />
          </button>
          <button
            onClick={this.next}
            className="border border-white w-14 aspect-square rounded-full grid place-content-center"
          >
            <MdOutlineArrowForwardIos size={20} />
          </button>
        </div>
      </div>
    );
  }
}
