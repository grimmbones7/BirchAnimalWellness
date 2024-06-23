"use client";

/*·eslint-disable·react/no-unescaped-entities·*/
import Image from "next/image";

export default function CatServices() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-primary py-16 mb-8">
        <h1 className="text-4xl md:text-6xl text-center text-white font-serif">For Your Cat</h1>
      </div>

      <div className="space-y-12">
        {/* Iridology Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/foryourcat/iridology.png"
                alt="Close-up of a cat's eye"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Iridology</h2>
              <p className="mb-4">
                Iridology was discovered by Hippocrates over 2500 years ago, and was modernized by Bernard Jensen in
                1979. Iridology is the ancient science of analyzing the fiber structure, colour and marking of the iris
                of the eye. The iris records information about the emotional and physical state and function of every
                organ and gland in the body, as well as levels of inflammation and toxicity.
              </p>
              <p className="mb-4">
                A major advantage of this natural therapy is that changes record in the iris years before the physical
                symptoms actually develop. Therefore, it can be used as an early indicator, as well as a marker for past
                and present health issues.
              </p>
              <p>
                Iridology is a safe, simple and non-invasive method of assessment that can be integrated with any form
                of medicine. When Iridology is applied to animals, it can be used to: assess the fitness of pets before
                adoption or breeding, assess rescued animals with no known background, and determine if there is an
                underlying physical issue causing a behavioural problem.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold">Session Length:</h3>
              <p>Approximately 1 hour.</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold">Cost:</h3>
              <p>$100</p>
            </div>
            <div>
              <a href="/book-iridology" className="btn btn-primary">
                Book Session
              </a>
            </div>
          </div>
        </div>

        {/* Acupressure Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Acupressure</h2>
              <p className="mb-4">
                Traditional Chinese Medicine was discovered in 1000 BC. Traditional Chinese Medicine functions on the
                principle that the body is an integrated, energetic structure and an imbalance anywhere affects the
                entire system. The main belief behind of this type of medicine is that our bodies can heal themselves we
                just have to nudge them back towards balance.
              </p>
              <p className="mb-4">
                Acupressure is a form of TCM that aims to clear blockages in the energetic channels throughout the body
                by applying light pressure to acupoints to restore the harmonious flow of Chi. The bodys Chi can be
                disrupted, weakened, or blocked if there is imbalance between the pairs of yin and yang organs or
                between the Five Elements.There are many categories of acupressure points, some that are more powerful,
                some govern regions or systems of the body, and others that (re)connect organ systems.
              </p>
              <p className="mb-4">
                Imbalances can display as: behavioural problems such as separation anxiety, difficulty concentrating, or
                aggression; physical problems such as joint pain, digestive issues, itchy skin, or other chronic
                wellness issues.
              </p>
              <p>
                <strong>Seasonal Tune Up Sessions:</strong> As the seasons transition, one of the Five Elements is
                weakened and one is strengthened. Due to the intimate relationship between the Five Elements, this can
                create numerous imbalances in any of the Elements. For example, when moving from Spring to Summer, Fire
                gets stronger and Wood is weakened.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/foryourcat/acupressure.png"
                alt="Canine Acupressure Meridian Chart"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <p className="text-sm text-center mt-2">Meridian chart copyright Tallgrasspublishers.com</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold">Session Length:</h3>
              <p>Assessment and working session. First session is longest. Approximately 45 minutes - 1 hour.</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold">Cost:</h3>
              <p>$90</p>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="/book-acupressure" className="btn btn-primary">
                Book Session
              </a>
              <a href="/waiver.docx" className="btn btn-secondary">
                Download Waiver
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/foryourcat/floweressences.png"
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
                tree buds that can improve the mental state which subsequently influences the physical state. They
                simply replace the negative trait with its positive virtue. Flower Essences are totally safe,
                non-addictive, holistic, and completely compatible with conventional and homeopathic medicine.
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
        {/* Cold Laser Therapy (LLLT) Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Cold Laser Therapy (LLLT)</h2>
              <p className="mb-4">
                Cold Laser Therapy, or Low Level Laser Therapy (LLLT) is a form of light therapy. This involves the
                application of low power light (red and near infrared light) to injuries or closed wounds to improve
                healing and relieve acute and chronic pain.
              </p>
              <p className="mb-4">
                When low level laser light waves penetrate deeply into the skin, they optimize the immune responses of
                our blood. This helps to both strengthen the immune system and improve inflammation by supplying vital
                oxygen and energy to every cell. The aim is to bio-stimulate and because of the low power nature of
                these lasers, the effects are biochemical and not thermal and therefore, cannot cause heat damage to
                tissue. Especially beneficial for arthritis, joint pain, post-injury, or post-surgery healing.
              </p>
              <p className="mb-4">
                My lasers are not LEDs. Light Emitting Diodes are a very popular form of laser, but are a non-coherent
                source of light (scattered beam) as compared to the cold laser which is a coherent light source (focused
                beam). Clinical studies have shown that a focused beam penetrates much deeper into the tissues which
                allows for a more complete healing process.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/foryourcat/coldlaser.png"
                alt="Applying cold laser therapy to a cat's leg"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold">Session Length:</h3>
              <p>It depends on the size of the area Im working, but typically ~30 minutes.</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold">Cost:</h3>
              <p>$65</p>
            </div>
            <div>
              <a href="/book-cold-laser-therapy" className="btn btn-primary">
                Book Session
              </a>
            </div>
          </div>
        </div>
        {/* Animal Reiki Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/foryourcat/reiki.png"
                alt="cat grazing in a field"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Animal Reiki</h2>
              <p className="mb-4">
                Reiki is a Japanese healing technique based on the principle that the therapist can channel energy into
                the patient by means of touch, to activate the natural healing processes of the patients body and
                restore physical and emotional well-being. They do this by moving the 'Rei' or 'life force energy' to
                parts of the body, meridians, or chakras that are unbalanced.
              </p>
              <p className="mb-4">
                "Reiki is an ideal alternative therapy for animals because it is gentle, painless, non-invasive and
                stress free. It heals at all levels of an animals being: physical, mental, emotional, and spiritual. It
                can be given at any distance, under any circumstances to treat any problem. It is a powerful holistic
                therapy that always goes to the root of the problem, but causes no harm to recipient or practitioner." –
                Kathleen Prasad
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
                Telepathy is the ability to see what is in someone else’s mind, to feel their feelings, or to
                communicate mentally. Many animal communicators also connect with animals that have passed away or are
                lost as this therapy is not limited by time or distance.
              </p>
              <p className="mb-4">
                An animal communication session helps you to gain a deeper understanding of your animal and help them
                feel heard. It is commonly used to determine why a behavioural problem occurred, how the animal feels
                physically or about changes, food choices, their routine, travelling, surgery, or death, etc.
              </p>
              <p className="mb-4">
                To do a session, all I need is a picture of your animal looking at the camera that doesn’t have any
                other people or animals in it, your animal’s name, age, and gender. Many pet parents also provide a list
                of specific questions or concerns going into the session and those are discussed with the animal.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/foryourcat/animcomm.png"
                alt="Applying cold laser therapy to a car's leg"
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
                  This is done over a distance (unless a large group). We offer both 15-minute and 30-minute
                  communication sessions.
                </p>
                <p>Sessions can be conducted via Skype, phone, or I can send you a summary afterwards.</p>
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
    </div>
  );
}
