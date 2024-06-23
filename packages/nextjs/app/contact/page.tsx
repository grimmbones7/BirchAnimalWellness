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
            <div className="card-body">
              <h2 className="card-title flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Hours of Operation
              </h2>
              <p>Monday to Friday</p>
              <p className="text-2xl font-semibold">9am to 5pm</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                Contact Information
              </h2>
              <p>
                <a href="mailto:birchanimalwellness@gmail.com" className="link link-primary">
                  birchanimalwellness@gmail.com
                </a>
              </p>
              <p className="flex items-center mt-2">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:6474600082" className="link link-primary">
                  647 460 0082
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  src="/path-to-your-map-image.jpg"
                  alt="Service Area Map"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Location Policy
                </h2>
                <p>The circle indicated on this map is a guideline of the area I service for in-person therapies.</p>
                <p>
                  If you live more than a <strong>15 minute drive</strong> from me, a proportional gas fee will apply.
                </p>
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

          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Waiver
                </h2>
                <p>Please print and bring a signed copy to your first appointment</p>
                <div className="card-actions justify-end mt-4">
                  <a href="/path-to-your-waiver.docx" download className="btn btn-primary">
                    Download Waiver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
