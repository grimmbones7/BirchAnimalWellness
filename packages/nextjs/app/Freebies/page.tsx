"use client";

import Image from "next/image";
import DownloadButton from "~~/components/DownloadButton";
import HeaderOverlay from "~~/components/HeaderOverlay";

export default function Freebies() {
  return (
    <div className="container mx-auto px-4">
      <HeaderOverlay title="Freebies" backgroundImage="/Headerbanner/lightwood.png" />

      <div className="space-y-12">
        {/* Iridology Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/foryourdog/iridology.png"
                alt="Close-up of a dog's eye"
                width={600}
                height={900}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold mb-4">York Region Forest Trails 2.0</h2>
                <p className="mb-4">
                  After the first few times I posted pictures from Kaia and I's hikes on the trails, I had people
                  surprised they were so close by! So I decided to hike them all and write reviews so you can find the
                  one that works best for you.
                </p>
                <p className="mb-4">
                  This includes location, length, maps, bodies of water, elevation changes, safety, quality, and tree
                  coverage among others.
                </p>
                <p>A special thank you to my research assistant, Kaia!</p>
              </div>
              <div className="mt-8 flex justify-center">
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
        {/* ADD NEW SECTION HERE  */}
      </div>
    </div>
  );
}
