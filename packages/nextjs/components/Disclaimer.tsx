import React from "react";
import Link from "next/link";

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-neutral-400 text-neutral-800 p-8 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-serif text-center mb-6">Disclaimer</h2>

      <div className="space-y-4 text-center">
        <p>I did not attend veterinary college and I do not claim to be a veterinarian.</p>
        <p>My approaches to animal health care are natural and complementary methods only.</p>

        <p>I do not provide medical diagnosis, prescribe medications, or perform invasive procedures.</p>
        <p>Always seek licensed veterinary care when indicated.</p>

        <p className="mt-6">
          The information on this website is not intended as a substitute for the advice and treatment of a veterinarian
          or medical professional. Please consult your holistic veterinarian for all your animal's health care needs.
        </p>

        <p className="mt-6">
          If you are interested in similar therapies for yourself, please visit my mother's website:
          <br />
          <Link href="https://conecandlesbylisa.com" className="text-blue-600 hover:underline">
            conecandlesbylisa.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
