import React from "react";

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
}

const HeaderOverlay: React.FC<HeroSectionProps> = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-16 md:h-36 mb-8 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-4xl md:text-6xl text-center text-white font-serif relative z-10">{title}</h1>
    </div>
  );
};

export default HeaderOverlay;
