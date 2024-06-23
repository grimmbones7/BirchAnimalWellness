import React from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  { id: "EH", image: "/path-to-eh-image.jpg", text: "Testimonial text for E.H." },
  { id: "VE", image: "/path-to-ve-image.jpg", text: "Testimonial text for V.E." },
  { id: "LV", image: "/path-to-lv-image.jpg", text: "Testimonial text for L.V." },
];
interface TestimonialBoxProps {
  id: string;
  image: string;
  text: string;
}

const TestimonialBox: React.FC<TestimonialBoxProps> = ({ id, image, text }) => (
  <div className="relative w-64 h-64 group">
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
        <p className="text-white text-xl font-semibold">{id}</p>
        <p className="text-white text-sm">What she had to say &gt;</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-green-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center p-4">
      <p className="text-white text-center">{text}</p>
    </div>
    <div className="absolute -top-4 -right-4 text-6xl text-blue-900 opacity-80"></div>
  </div>
);

const TestimonialsAndTalkSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-16">
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="transform -translate-y-8">
            <TestimonialBox {...testimonials[0]} />
          </div>
          <TestimonialBox {...testimonials[1]} />
          <div className="transform translate-y-8">
            <TestimonialBox {...testimonials[2]} />
          </div>
        </div>
        <Link
          href="https://www.google.com/reviews"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300"
        >
          See more testimonials on Google Reviews!
        </Link>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 flex items-center">
        <div className="w-1/3 pr-8">
          <Image src="/path-to-microphone-image.jpg" alt="Microphone" width={300} height={200} className="rounded-lg" />
        </div>
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-4">Want to host a talk?</h2>
          <p className="mb-4">
            For those that want to learn more about{" "}
            <span className="font-semibold">complementary wellness therapies, raw pet food, or pet food labels</span>{" "}
            for their animals are welcome to email me to book a talk at their business!
          </p>
          <p>
            See the{" "}
            <Link href="/talks-and-workshops" className="text-blue-600 hover:underline">
              Talks & Workshops page
            </Link>{" "}
            for more information about upcoming events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndTalkSection;
