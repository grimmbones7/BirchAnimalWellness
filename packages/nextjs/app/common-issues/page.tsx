/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import HeaderOverlay from "~~/components/HeaderOverlay";

export default function OtherAnimalServicesPage() {
  return (
    <div className="container mx-auto px-4">
      <HeaderOverlay title="Common Issues" backgroundImage="/Headerbanner/lightwood.png" />

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/commonissues/sepanx.png"
              alt="Separation Anxiety"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Separation Anxiety</h2>
            <p className="mb-4 font-bold">
              The most common behavioural problem that I get called to work on is separation anxiety.
            </p>
            <p className="mb-4">
              This usually stems from one of two influences: a traumatic experience or the energy of the household.
              Likely, this is due to the increase in anxiety in humans because of the rise of living costs, stress in
              our lives, and 'busyness'. Many pet parents don't know that animals are highly sensitive to the energy
              within their household and quite often gets their anxiety from the people in the house.
            </p>
            <p className="mb-4">
              I’ve worked with animals that cant be left alone because they will destroy the house. Some start to bark
              or howl as soon as the owner leaves and others refuse to eat, go for walks, or socialize while their owner
              is away. I understand the guilty feeling when you have to leave them for longer periods of time, but a
              well-adjusted animal should be okay being alone as long as their bladder isnt full.
            </p>
          </div>
        </div>
      </div>

      <div className="container shadow-md bg-gray-200 rounded-lg gap-5">
        <p className="p-4">
          <b>Household Approach:</b> The first step in this case is to always speak with the owner about energy and how
          sensitive animals are to it. The therapy approach includes both Acupressure and Flower Essence for the animal
          to aid them in moving through the anxiety and not picking up on their owner's energy.
        </p>
        <p className="p-4">
          <b>Trauma Approach:</b> To be delicate with the animals likely sensitivity to proximity, I typically begin
          with Reiki to work through traumatic experience from a distance. It is important at this stage for the owner
          not to accidentally reward clingy behaviour in order for the animal to gain confidence and independence. Once
          animal is through majority of trauma, bi-monthly 'tune ups' of either Acupressure or Reiki until animal is
          comfortable being alone.
        </p>
      </div>

      {/* Animal Reiki Section */}
      <div className="container bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/commonissues/digissues.png"
              alt="Horse grazing in a field"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Digestive Issues</h2>
            <p className="mb-4">
              This affects so many other aspects of the animal's life and tends to be the root cause of the presenting
              indicators for approximately half the animals I work with. What your animal eats is incredibly important
              and is the single greatest factor when it comes to their health. Almost 70% of a dog’s immune system is in
              the gastrointestinal system, so if they are eating poorly it will show.
            </p>
            <p className="mb-4">
              I have years of first-hand experience with digestive issues as my dog, Kaia, has had a sensitive stomach
              since I got her. We’ve tried half a dozen foods, and a handful of digestive supplements to get a balance
              that works for her, but it was worth it. For me, my dog’s health is a big priority, as I’m sure it is for
              many other pet parents, and I want to help you worry less. ​
            </p>
          </div>
        </div>
      </div>
      <div className="container shadow-md bg-gray-200 rounded-lg gap-5">
        <p className="p-4">
          <b>Approach:</b> Firstly, you and I will talk about your animal's diet, lifestyle, and routine. I usually
          accompany this with a quick check for parasites using Iridology. The main part of the approach is to perform
          an Acupressure session to determine where the GI issue is coming from and do a detox if necessary. The last
          part is to make dietary and supplemental recommendations based on what is causing the digestive upset.
          Typically I also recommend a few follow up sessions for an Acupressure tune up.
        </p>
      </div>
      {/* Telepathy */}
      <div className="container pt-5">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Allergies</h2>
              <p className="mb-4">
                <b>
                  It is very common for pets nowadays to have allergic reactions to toxins in their environment or their
                  food.
                </b>
              </p>
              <p className="mb-4">
                It can present as anything from sneezing or itching to rashes or hives. Depending on how quickly the
                symptoms appear, it can be difficult to pinpoint what is causing the reaction. I’ve seen pets have
                allergies to everything from grass or pollen to chicken and fish so knowing your pet’s environment is
                key.
              </p>
              <p className="mb-4">
                It’s difficult as a pet parent to watch your pet itching constantly or even scratching to the point of
                bleeding. It breaks your heart because you feel helpless and frustrated. Luckily some allergies are only
                seasonal and these are also easier to pinpoint.{" "}
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/commonissues/allergies.png"
                alt="Applying cold laser therapy to a horse's leg"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container shadow-md bg-gray-200 rounded-lg gap-5">
        <p className="p-4">
          <b>Approach:</b> The first step is to figure out what the trigger is and to do this you and I will have a
          conversation about new things in the animal’s environment and diet. Once we have narrowed it down, I perform
          an Acupressure session on your animal to help the body detox and boost the immune system. I can then recommend
          nutritional supplements to help flush the allergens from the dog’s system.
        </p>
      </div>
    </div>
  );
}
