import React from "react";
import Image from "next/image";
import { Clock, FileText, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6 text-center">
              <h2 className="card-title justify-center text-2xl mb-4">
                <Clock className="w-8 h-8 mr-3 text-primary" />
                Hours of Operation
              </h2>
              <div className="space-y-2">
                <p className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2 text-secondary" />
                  <span>
                    <b>Stouffville</b>: Wednesdays
                  </span>
                </p>
                <p className="flex items-center justify-center pb-3">
                  <MapPin className="w-5 h-5 mr-2 text-secondary" />
                  <span>
                    <b>Lindsay</b>: Mondays & Thursdays
                  </span>
                </p>
                <p className="text-2xl font-semibold mt-4 flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-2 text-primary" />
                  9am to 5pm
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6 text-center">
              <h2 className="card-title justify-center text-2xl mb-4">
                <Mail className="w-8 h-8 mr-3 text-primary" />
                Contact Information
              </h2>
              <div className="space-y-3">
                <p className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2 text-secondary" />
                  <a href="mailto:birchanimalwellness@gmail.com" className="link link-primary">
                    birchanimalwellness@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center pt-3">
                  <Phone className="w-5 h-5 mr-2 text-secondary" />
                  <a href="tel:6474600082" className="link link-primary">
                    647 460 0082
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-white p-4 flex justify-center items-center">
                    <h2 className="text-2xl font-semibold text-center">Lindsay</h2>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/Policies/Lindsay.png"
                      alt="Lindsay Service Area Map"
                      fill
                      sizes="(min-width: 808px) 50vw, 100vw"
                      style={{
                        objectFit: "cover", // cover, contain, none
                      }}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-white p-4 flex justify-center items-center">
                    <h2 className="text-2xl font-semibold text-center">Stouffville</h2>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/Policies/Stouffville.png"
                      alt="Stouffville Service Area Map"
                      fill
                      sizes="(min-width: 808px) 50vw, 100vw"
                      style={{
                        objectFit: "cover", // cover, contain, none
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Location Policy
                </h2>
                <p> Base travel fee is $5 + $5 per 10 mins drive</p>
                <div className="mt-4">
                  <h3 className="font-semibold">Distance therapies available worldwide:</h3>
                  <ul className="list-disc list-inside">
                    <li>Flower Essences</li>
                    <li>Reiki</li>
                    <li>Animal Communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Waiver Section */}
          <div className="gap-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Waiver
                </h2>
                <p>Please download and sign the waiver before your first appointment</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="/documents/waiver.pdf"
                    download="Birch_Animal_Wellness_Waiver.pdf"
                    className="btn btn-primary"
                  >
                    Download Waiver
                  </a>
                </div>
              </div>
            </div>

            {/* Therapy Policy Section */}

            <div className="mt-10 card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Therapy Policy
                </h2>
                <p>
                  <b>Not all therapies are available for all species of animal.</b> Please see what is available by
                  viewing the services page for your species.
                </p>
                {/* <div className="card-actions justify-end mt-4">
                  <a href="/path-to-your-waiver.docx" download className="btn btn-primary">
                    Download Waiver
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
