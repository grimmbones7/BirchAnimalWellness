import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const TalkSection: NextPage = () => {
  return (
    <div className="container mx-auto px-16 py-8">
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-8">
            <h2 className="text-3xl font-semibold mb-4">Want to Host a Talk?</h2>
            <div className="relative w-full h-48 md:h-64">
              <Image src="/hostatalk.png" alt="A open mic" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <p className="mb-4">
              <b>
                It is very common for pets nowadays to have allergic reactions to toxins in their environment or their
                food.
              </b>
            </p>
            <p className="mb-4">
              It can present as anything from sneezing or itching to rashes or hives. Depending on how quickly the
              symptoms appear, it can be difficult to pinpoint what is causing the reaction. I've seen pets have
              allergies to everything from grass or pollen to chicken and fish so knowing your pet's environment is key.
            </p>
            <p className="mb-4">
              It's difficult as a pet parent to watch your pet itching constantly or even scratching to the point of
              bleeding. It breaks your heart because you feel helpless and frustrated. Luckily some allergies are only
              seasonal and these are also easier to pinpoint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkSection;
