import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { ChevronRight } from 'lucide-react';

const OwnerSection = () => {
  const slide = {
    src: "/homepage-ownerbox/homepage-ferns.png",
    alt: "Ferns",
    title: "THE OWNER",
    text: "I grew up in an environment where natural remedies and holistic therapies were the norm. Complementary therapies such as chiropractic care, cold laser, and massage got me through recovery from my car accident and the subsequent vertigo. I know how much they've done for me, and I would love the opportunity to show you how they can change your life and your animal's life.",
    link: "/about",
    linkText: "Learn more",
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
        </div>
        <div className="md:w-1/2 p-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
          <p className="text-gray-700 mb-6">{slide.text}</p>
          <Link href={slide.link} className="inline-flex items-center text-gray-700 font-semibold hover:text-gray-900">
            {slide.linkText}
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;
