import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";

const TherapySection: NextPage = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const boxes = [
    {
      image: "/homepage-speciestherapies/homepage-dogtherapies.png",
      text: "ANXIOUS?\nJOINT PAIN?\nPOOR DIGESTION?\nHYPERACTIVE?",
      hoverText: "Therapies for Dogs",
      hoverLink: "#dog-therapies", // Placeholder link
    },
    {
      image: "/homepage-speciestherapies/homepage-cattherapies.png",
      text: "KIDNEY STONES?\nDRY COAT?\nSTIFFNESS?\nNOT EATING?",
      hoverText: "Therapies for Cats",
      hoverLink: "#cat-therapies", // Placeholder link
    },
    {
      image: "/homepage-speciestherapies/homepage-horsetherapies.png",
      text: "SPOOKY?\nSTUBBORN?\nMUSCLE PAIN?\nCRIBBING?\nARTHRITIS?",
      hoverText: "Therapies for Horses",
      hoverLink: "/horseservices", // Placeholder link
    },
  ];

  return (
    <div className="flex justify-center items-center py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image src={box.image} alt={`Box ${index + 1}`} layout="fill" objectFit="contain" className="rounded-lg" />
            <div
              className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${
                hovered === index ? "bg-black bg-opacity-70" : "bg-black bg-opacity-50"
              }`}
            >
              {hovered === index ? (
                <a href={box.hoverLink} className="text-white text-center text-xl underline">
                  {box.hoverText}
                </a>
              ) : (
                <p className="text-white text-center whitespace-pre-line">{box.text}</p>
              )}
            </div>
            <div className="absolute inset-0 border-2 border-white m-4 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapySection;
