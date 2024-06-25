import React from "react";

interface TestimonialCardProps {
  text: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, imageUrl }) => {
  return (
    <div className="relative w-80 h-80 group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-[#2d3748] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center p-6">
        <p className="text-white text-center">{text}</p>
      </div>
      <div className="absolute top-0 right-0 text-6xl text-yellow-500 opacity-80 z-10">"</div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      text: "Since you started treating him he has gone from barely being able to get up and refusing walks to getting up easily on his own and barking to go for walks...thank you for helping my best friend start enjoying life again.",
      imageUrl: "/homepage-testimonialimages/Earnhardt.png",
    },
    {
      text: "I implemented most of the wishes Jesse brought to my knowledge. And what can I say? Shadow is much more relaxed, even more trustful towards me and I enjoy exploring how fulfilling his wishes and unknown needs affects our relationship.",
      imageUrl: "/homepage-testimonialimages/shadow.png",
    },
    {
      text: "Jesse was so good at getting Newt over his grief after his buddy died. I couldn't believe the difference in him after 2 treatments. She also picked up an issue with his hind end. Shortly after I had him x-rayed and found an abnormal bone growth in one of his hind legs.",
      imageUrl: "/homepage-testimonialimages/newt.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <TestimonialCard {...testimonials[0]} />
        <div className="py-10">
          <TestimonialCard {...testimonials[1]} />
        </div>
        <TestimonialCard {...testimonials[2]} />
      </div>
    </div>
  );
};

export default TestimonialSection;
