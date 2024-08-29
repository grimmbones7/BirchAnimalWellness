import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SlideProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const OwnerSection: React.FC = () => {
  const slides: SlideProps[] = [
    {
      src: "/homepage-ownerbox/homepage-ferns.png",
      alt: "Ferns",
      title: "THE OWNER",
      text: "I grew up in an environment where natural remedies and holistic therapies were the norm. Complementary therapies such as chiropractic care, cold laser, and massage got me through recovery from my car accident and the subsequent vertigo. I know how much they've done for me, and I would love the opportunity to show you how they can change your life and your animal's life.",
      link: "/common-issues",
      linkText: "Learn more",
    },
    {
      src: "/homepage-ownerbox/homepage-herd.png",
      alt: "Herd of horses",
      title: "MY MISSION",
      text: "My goal is to help the animals that have chronic wellness issues or deep-seated behavioural trauma. During the process I will teach you about what I do, and how to help your animals from a more holistic wellness standpoint. I combine multiple therapies to provide a well-rounded approach to any behavioral or wellness issue they have.",
      link: "/common-issues",
      linkText: "Common Issues",
    },
  ];

  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );

  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto p-8 md:p-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="md:w-1/2 relative h-64 md:h-[400px]">
                <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between bg-white bg-opacity-70 backdrop-blur-sm mx-2">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{slide.title}</h2>
                  <p className="text-gray-800 mb-6 leading-relaxed">{slide.text}</p>
                </div>
                <Link
                  href={slide.link}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 border border-gray-300 px-4 py-2 rounded self-start"
                >
                  {slide.linkText}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OwnerSection;
