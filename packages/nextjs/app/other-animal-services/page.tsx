/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import HeaderOverlay from "~~/components/HeaderOverlay";

export default function OtherAnimalServicesPage() {
  return (
    <div className="container mx-auto px-4">
      <HeaderOverlay title="For Your Other Animals" backgroundImage="/Headerbanner/lightwood.png" />

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/foryourotherpets/floweressences.png"
              alt="Yellow flower in bloom"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Flower Essences</h2>
            <p className="mb-4">
              Dr. Edward Bach, a renowned physician concluded almost 80 years ago that his patients illnesses were
              directly related to their negative states of mind. Flower Essences are dilute infusions of flowers and
              tree buds that can improve the mental state which subsequently influences the physical state. They simply
              replace the negative trait with its positive virtue. Flower Essences are totally safe, non-addictive,
              holistic, and completely compatible with conventional and homeopathic medicine.
            </p>
            <p className="mb-4">
              Flower Essences help animals with issues such as aggression, fear, depression, lack of confidence,
              separation anxiety, hyperactivity, and concentration issues. Essences can be especially helpful for
              emotional issues during or after a traumatic experience such as: thunderstorms, car rides, aggressive
              encounter with another animal, loss of another pet in the family, injuries, surgery, etc.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold">Session Length:</h3>
            <p>Phone consult: ~20 minutes. Remedy can be shipped or picked up.</p>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold">Cost:</h3>
            <p>Consult: $75</p>
            <p>Bottle: $35 (lasts ~1 month + shipping)</p>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="/book-flower-essence-consult" className="btn btn-primary">
              Book Consult
            </a>
            <a href="/order-flower-essence" className="btn btn-secondary">
              Order Bottle
            </a>
          </div>
        </div>
      </div>

      {/* Animal Reiki Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/foryourotherpets/reiki.png"
              alt="Horse grazing in a field"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Animal Reiki</h2>
            <p className="mb-4">
              Reiki is a Japanese healing technique based on the principle that the therapist can channel energy into
              the patient by means of touch, to activate the natural healing processes of the patients body and restore
              physical and emotional well-being. They do this by moving the 'Rei' or 'life force energy' to parts of the
              body, meridians, or chakras that are unbalanced.
            </p>
            <p className="mb-4">
              "Reiki is an ideal alternative therapy for animals because it is gentle, painless, non-invasive and stress
              free. It heals at all levels of an animals being: physical, mental, emotional, and spiritual. It can be
              given at any distance, under any circumstances to treat any problem. It is a powerful holistic therapy
              that always goes to the root of the problem, but causes no harm to recipient or practitioner." – Kathleen
              Prasad
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
            <h3 className="font-semibold">Session Length:</h3>
            <p>
              This can be done over distance. It can be performed over Zoom or using a picture. It depends on how long
              your animal needs healing. Typically 30-45 minutes, but will go as long as 1 hour.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Cost:</h3>
            <p>$85</p>
          </div>
          <div className="mb-4">
            <a href="/book-animal-reiki" className="btn btn-primary">
              Book Animal Reiki Session
            </a>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Combination Reiki Session:</h3>
            <p className="mb-2">
              Due to the animal-human bond, many owners present with similar emotional imbalances as their pet as they
              live in the same environment. Combination sessions allow me to work on both you and your animal at the
              same time.
            </p>
            <p className="font-semibold">Cost: $120</p>
          </div>
          <div className="mt-2">
            <a href="/book-combination-reiki" className="btn btn-secondary">
              Book Combination Reiki Session
            </a>
          </div>
        </div>
      </div>
      {/* Telepathy */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Animal Communication</h2>
            <p className="mb-4">
              Animal communication is a form of telepathy that allows one to have a ‘conversation’ with an animal.
              Telepathy is the ability to see what is in someone else’s mind, to feel their feelings, or to communicate
              mentally. Many animal communicators also connect with animals that have passed away or are lost as this
              therapy is not limited by time or distance.
            </p>
            <p className="mb-4">
              An animal communication session helps you to gain a deeper understanding of your animal and help them feel
              heard. It is commonly used to determine why a behavioural problem occurred, how the animal feels
              physically or about changes, food choices, their routine, travelling, surgery, or death, etc.
            </p>
            <p className="mb-4">
              To do a session, all I need is a picture of your animal looking at the camera that doesn’t have any other
              people or animals in it, your animal’s name, age, and gender. Many pet parents also provide a list of
              specific questions or concerns going into the session and those are discussed with the animal.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/foryourotherpets/animcomm.png"
              alt="Applying cold laser therapy to a horse's leg"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Session Information</h3>
              <p className="mb-2">
                This is done over a distance (unless in a large group). We offer both 15-minute and 30-minute
                communication sessions.
              </p>
              <p>Sessions can be conducted via Zoom, phone, or I can send you a summary afterwards.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Pricing</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <span>15 Minutes:</span>
                  <a href="/book-15-min-session" className="btn btn-primary">
                    Book for $50
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span>30 Minutes:</span>
                  <a href="/book-30-min-session" className="btn btn-secondary">
                    Book for $75
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
