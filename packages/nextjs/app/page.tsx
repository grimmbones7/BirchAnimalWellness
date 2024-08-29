"use client";

import { useMemo } from "react";
import Image from "next/image";
import { type NextPage } from "next";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Footer } from "~~/components/Footer";
import GoogleReviewSection from "~~/components/GoogleReviewSection";
import OwnerSection from "~~/components/OwnerSection";
import ServiceAreaSection from "~~/components/ServiceAreaSection";
import TalkSection from "~~/components/TalkSection";
import TestimonialSection from "~~/components/TestimonialSection";
import TherapiesOffered from "~~/components/TherapiesOffered";
import TherapySection from "~~/components/TherapySection";

const images = [
  {
    src: "/horse-homepage.jpg",
    alt: "Picture of a grey horse in a field",
    text: "Unless the underlying cause is addressed, the indicators will persist.",
  },
  {
    src: "/dog-homepage.jpg",
    alt: "Fluffy puppy in a field with purple flowers",
    text: "Natural therapies address bodily ailments, as well as mind and soul ailments",
  },
  {
    src: "/cat-homepage.jpg",
    alt: "Tabby cat in a field",
    text: "Natural, holistic therapies are safe and effective methods that allow the body to heal itself.",
  },
];

const Home: NextPage = () => {
  // Use useMemo to prevent unnecessary re-renders of the settings object
  const settings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      // nextArrow: <SampleArrow direction="next" />,
      // prevArrow: <SampleArrow direction="prev" />,
      fade: true, // Add fade effect
    }),
    [],
  );

  return (
    <>
      <div className="relative w-full h-[80vh]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={image.src} className="relative w-full h-[80vh]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0} // Prioritize loading of the first image
              />
              <div className="absolute inset-0 flex items-center justify-left">
                <div className="bg-black bg-opacity-10 p-4 md:p-8 rounded-md max-w-[40%] text-center">
                  <p className="text-white text-lg md:text-3xl font-light opacity-0 animate-fadeIn delay-500">
                    {image.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex-grow shadow-md bg-gray-200 rounded-lg gap-5">
        <OwnerSection />
        <TherapySection />
      </div>
      <div className="flex-grow shadow-md bg-gray-200 rounded-lg gap-5 py-5">
        <TestimonialSection />
      </div>
      <div className="flex justify-center items-center shadow-md bg-gray-200 rounded-lg gap-5 py-5">
        <GoogleReviewSection />
      </div>
      <div className="flex justify-center items-center shadow-md bg-gray-200 rounded-lg gap-5 py-5">
        <TalkSection />
      </div>
      <div className="flex justify-center items-center shadow-md bg-gray-200 rounded-lg gap-5 py-5">
        <TherapiesOffered />
      </div>
      <div className="flex justify-center items-center shadow-md bg-gray-200 rounded-lg gap-5 py-5">
        <ServiceAreaSection />
      </div>
      {/* <div className="flex justify-center items-center shadow-md bg-gray-200 rounded-lg gap-5 py-5">
        <HorseSportsCanadaSection />
      </div> */}
      <Footer />

      <style jsx>{`
        .custom-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          z-index: 1;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .next-arrow {
          right: 10px;
        }
        .prev-arrow {
          left: 10px;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
};

export default Home;
