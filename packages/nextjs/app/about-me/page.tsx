/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import HeaderOverlay from "~~/components/HeaderOverlay";

export default function AboutMePage() {
  return (
    <div className="container mx-auto px-4">
      <HeaderOverlay title="About Me" backgroundImage="/Headerbanner/lightwood.png" />
      <div className="space-y-12">
        {/* Iridology Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image src="/about/biopic.png" alt="About me" width={400} height={200} className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">About Jesse</h2>
              <p className="mb-4">
                I grew up in an environment where natural remedies and medicines were the norm. Complementary therapies
                such as chiropractic care, homeopathic medicine, and massage therapy got me through recovery from my car
                accident and the subsequent vertigo. I wouldn’t have the mobility I have without the weekly cold laser
                sessions I do on my knees and the tendon that tore in the accident. I know how much they’ve done for me,
                and I would love the opportunity to show you how they can change your life and your animal’s life.
              </p>
              <p>
                Many of my clients come to me because they have exhausted all other options or they don’t feel
                comfortable with the options their vet gave them; choose between an expensive surgery or a lifetime of
                medication. I understand the struggle of trying Western medicine and not getting any answers or the
                answer you were hoping for. My dog Kaia has had digestive issues since I got her. We’ve tried six
                different foods, and a variety of supplements to help her. Her fecal tests and bloodwork are normal
                whenever I got her tested. I was sent home with antibiotics that didn’t help her at all. I know how
                heart wrenching it is to watch your animal go through something and not be able to help.
              </p>
              <p>
                My sole desire is to help your animal have the highest quality of life possible and am willing to be
                part of your animal’s wellness team as long as you need me.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-8 flex flex-col justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="mb-4 sm:mb-0 col-span-2">
            <div className="font-sans max-w-2xl mx-auto p-4">
              <ul className="list-none p-0">
                <li className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-lg font-semibold">Honours Specialization in Animal Behaviour (BSc)</strong>
                    <span className="text-sm text-gray-600">since 2015</span>
                  </div>
                  <em className="text-sm text-gray-700">Western University</em>
                </li>
                <li className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-lg font-semibold">Equine, Feline, and Canine Iridology Technician</strong>
                    <span className="text-sm text-gray-600">since 2015</span>
                  </div>
                  <em className="text-sm text-gray-700">Through the Eye International (California)</em>
                </li>
                <li className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-lg font-semibold">Holy Fire/Usui Reiki Master</strong>
                    <span className="text-sm text-gray-600">since 2016</span>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-lg font-semibold">
                      NBCAAM Certified Small Animal Acupressure Practitioner
                    </strong>
                    <span className="text-sm text-gray-600">since 2018</span>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-lg font-semibold">NBCAAM Certified Equine Acupressure Practitioner</strong>
                    <span className="text-sm text-gray-600">since 2018</span>
                  </div>
                  <em className="text-sm text-gray-700">Tallgrass Animal Acupressure Institute</em>
                </li>
                <li className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-lg font-semibold">Veterinary Assistant</strong>
                    <span className="text-sm text-gray-600">since 2019</span>
                  </div>
                  <em className="text-sm text-gray-700">Ashworth College</em>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-2 col-span-1 flex flex-col justify-center items-center gap-y-5">
            {" "}
            <Image src="/about/NBCAAM-logo.png" alt="NBCAAM logo" width={250} height={250} className="rounded-lg" />
            <Image
              src="/about/Tallgrass-logo.png"
              alt="Tallgrass Logo"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
