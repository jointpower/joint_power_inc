// @ts-nocheck
import { useState } from "react";

export default function YoutubeVideo() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="mx-auto max-w-4xl mt-20" data-aos="fade-up">
      <div className="relative">
        {showVideo ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M0L6xAHbSNY?si=vjeDi9e8AG8IjDcV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="aspect-[16/9] w-full h-full"
          ></iframe>
        ) : (
          <button onClick={() => setShowVideo(true)} className="relative group">
            <picture>
              <img
                onClick={() => setShowVideo(true)}
                className="cursor-pointer w-full h-full object-cover"
                src="https://img.youtube.com/vi/M0L6xAHbSNY/maxresdefault.jpg"
                alt="video"
              />
            </picture>
            <div className="absolute top-[50%] left-[50%] text-white h-[30%] w-1/2 transform translate-x-[-50%] translate-y-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 28 28"
                className="h-full w-full transform transition group-hover:scale-110 duration-300 ease-in-out"
              >
                <path
                  fill="currentColor"
                  d="M10.138 3.382C8.304 2.31 6 3.632 6 5.756v16.489c0 2.123 2.304 3.445 4.138 2.374l14.697-8.59c1.552-.907 1.552-3.15 0-4.057z"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
