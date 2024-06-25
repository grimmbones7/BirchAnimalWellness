import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-gray-800 hover:text-gray-600 flex justify-center text-center">
              <Image src="/logo.png" width={100} height={100} alt="Logo of Birch Animal Wellness" />
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="font-bold">Providing Natural / Holistic Animal Care</p>
            <p className="text-gray-600">GTA / Toronto, Ontario, Canada</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 mr-2">
              Built with <HeartIcon className="inline-block h-4 w-4 text-red-500" />
            </p>
            <a
              href="https://riddingsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600"
            >
              RiddingSolutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
