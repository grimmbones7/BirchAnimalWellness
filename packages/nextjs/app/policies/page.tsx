import React from "react";
import { Calendar, Clock, Cloud, CreditCard, Mail, MapPin, Phone } from "lucide-react";

interface PolicyCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ title, icon, children }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title flex items-center text-xl mb-4">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </div>
  </div>
);

const PolicySection: React.FC = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary-content">Policies</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PolicyCard title="Payment Policy" icon={<CreditCard className="w-6 h-6" />}>
            <p>
              We accept various payment methods including cash, cheque, and e-transfers.{" "}
              <b>Full payment is due at the time of service. </b> <br /> <br />
              For international payments, please use PayPal to birchanimalwellness@gmail.com. A $5 fee will apply for
              international payments.
            </p>
          </PolicyCard>

          <PolicyCard title="Cancellation Policy" icon={<Calendar className="w-6 h-6" />}>
            <p>
              We understand that plans can change. However, we kindly request at least 24 hours' notice for
              cancellations. Late cancellations or no-shows are be subject to a <b>25% value of your appointment</b>{" "}
              plus travel fees for in-person appointments.
            </p>
            .
          </PolicyCard>

          <PolicyCard title="Travel Fee Policy" icon={<MapPin className="w-6 h-6" />}>
            <p>
              <b>Base travel fee is $5 + $5 per 10 mins drive </b> <br /> <br />
              Distance therapies (Flower Essences, Reiki, Animal Communication) are available worldwide.
            </p>
          </PolicyCard>

          <PolicyCard title="Weather Policy" icon={<Cloud className="w-6 h-6" />}>
            <p>
              Due to Canadian weather, if our session is outside, we will reschedule. To avoid dangerous driving
              conditions for in-person appointments, our appointment will also be rescheduled. Thank you for
              understanding and valuing my safety.
            </p>
          </PolicyCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PolicyCard title="Hours of Operation" icon={<Clock className="w-6 h-6" />}>
            <p>
              <strong>Stouffville:</strong> Wednesdays 9am to 5pm
              <br /> <br />
              <strong>Lindsay:</strong> Mondays & Thursdays 9am to 5pm
            </p>
          </PolicyCard>

          <PolicyCard title="Email Policy" icon={<Mail className="w-6 h-6" />}>
            <p>
              Emails will be answered within <b>48 business hours</b>. For urgent matters regarding same-day or next-day
              appointments, please call us.
            </p>
            <p className="flex items-center mt-2">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:6474600082" className="link link-primary">
                647 460 0082
              </a>
            </p>
          </PolicyCard>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
