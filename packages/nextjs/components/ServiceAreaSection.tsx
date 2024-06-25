import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const ServiceAreaSection: NextPage = () => {
  return (
    <div className="container mx-auto px-16 py-4">
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-8">
            <p className="text-3xl font-semibold mb-4">Service Area</p>
            <p className="mb-4">
              I provide in person holistic / wellness therapies in Stouffville, Aurora, Uxbridge, Newmarket, Markham,
              and Richmond Hill. I now have a secondary location in Lindsay two days a week. ​ I provide online distance
              therapy consults in Toronto, the GTA, throughout Ontario - or anywhere in the world!
            </p>
          </div>
          <div className="md:w-1/3 p-8 flex flex-col justify-center">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/Policies/Stouffville.png"
                alt="A map of Stouffville Service Area"
                height={300}
                width={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaSection;
