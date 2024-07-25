import React from "react";
import Image from "next/image";

interface TherapyCategory {
  name: string;
  therapies: string[];
}

const TherapiesOffered: React.FC = () => {
  const therapyCategories: TherapyCategory[] = [
    {
      name: "Iridology",
      therapies: ["Iridology for Horses", "Iridology for Dogs", "Iridology for Cats"],
    },
    {
      name: "Acupressure",
      therapies: ["Acupressure for Horses", "Acupressure for Dogs", "Acupressure for Cats"],
    },
    {
      name: "Flower Essences",
      therapies: [
        "Flower Essences for Horses",
        "Flower Essences for Dogs",
        "Flower Essences for Cats",
        "Flower Essences for Animals",
      ],
    },
    {
      name: "Cold Laser Therapy",
      therapies: ["Cold Laser Therapy for Horses", "Cold Laser Therapy for Dogs", "Cold Laser Therapy for Cats"],
    },
    {
      name: "Reiki",
      therapies: ["Reiki for Horses", "Reiki for Dogs", "Reiki for Cats", "Reiki for Animals"],
    },
    {
      name: "Animal Communication",
      therapies: [
        "Animal Communication for Horses",
        "Animal Communication for Dogs",
        "Animal Communication for Cats",
        "Animal Communication for Animals",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-16">
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden p-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Therapies I offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {therapyCategories.map((category, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <ul className="list-none">
                {category.therapies.map((therapy, therapyIndex) => (
                  <li key={therapyIndex} className="text-sm">
                    {therapy}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8 gap-4">
          {[
            { src: "/homepage-speciestherapies/homepage-horsetherapies.png", alt: "Horse" },
            { src: "/homepage-speciestherapies/homepage-dogtherapies.png", alt: "Dog" },
            { src: "/homepage-speciestherapies/homepage-cattherapies.png", alt: "Cat" },
          ].map((img, index) => (
            <div key={index} className="relative w-1/3 aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapiesOffered;
