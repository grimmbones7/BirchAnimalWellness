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
              <Image
                src="/hostatalk.png"
                alt="A open mic"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <p className="mb-4">
              For those that want to learn more about{" "}
              <b>complementary wellness therapies, raw pet food, or pet food labels </b> for their animals are welcome
              to email me to book a talk at their business.
            </p>
            <p> See the Talks & Workshops page for more information about upcoming events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkSection;
