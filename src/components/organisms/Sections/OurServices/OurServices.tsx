import Heading from "@/components/atom/Heading/Heading";
import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";
import HotelSecurityOfficerImg from "public/service4.png";
import bankSecurityOfficerImg from "public/bank-security.jpg";
import BankSecurityOfficerImg from "public/new_hotel.jpg";
import ApartmentOfficerImg from "public/new_apartment.jpg";
import medicalOfficerImg from "public/service2.png";
import MedicalOfficerImg from "public/service2.png";
import MobilePatrol from 'public/mobile_patrol.jpg';
import { BiCheck } from "react-icons/bi";
import NextImage from "@/components/atom/NextImage/NextImage";
// import Image, { StaticImageData } from 'next/image';
import fire1 from 'public/fire1.jpeg';
import fire2 from 'public/fire2.jpeg';
import Text from "@/components/atom/Text/Text";


const OurServices = () => {

  const success = [
    {
      name:'Efficiency',
      desc:'Having a single person or team responsible for handling all interactions streamlines communication. Clients don’t need to remember multiple names and contact details, which saves time and reduces the potential for confusion.',
    },
    {
      name:'Consistency',
      desc:'A designated point of contact ensures a consistent and standardized approach to customer service. This person or team becomes familiar with the client’s needs, preferences and history, allowing for a more personalized and consistent experience.',
    },
    {
      name:'Accountability',
      desc:'When there is a single point of contact, it’s easier to hold someone accountable for the quality and timeliness of services. If any issues or delays arise, the client knows who to contact to address the situation.',
    },
    {
      name:'Relationship Building',
      desc:'A dedicated point of contact can build a stronger and more trust-based relationship with the client. They can take the time to understand the client’s goals, anticipate their needs, and offer tailored solutions.',
    },
    {
      name:'Save Clients Time',
      desc:'Clients can avoid the hassle of explaining their situation repeatedly to different people within the company. This saves them time and reduces frustration.',
    },
    {
      name:'Faster Problem Resolution',
      desc:'In case of problems or concerns, having a single point of contact streamlines the resolution process. The designated person can quickly assess the issue and coordinate with the appropriate teams to find a solution.',
    },
    {
      name:'Improved Communication',
      desc:'Effective communication is crucial in service-based industries. With a single point of contact, information flows more smoothly between the client and the company, reducing the risk of miscommunication or misunderstandings.',
    },
    {
      name:'Customization',
      desc:'A single point of contact can help customize services to better suit the client’s specific needs and preferences. They can act as a liaison between the client and the company, ensuring that the services provided align with the client’s objectives.',
    },
    {
      name:'Better Knowledge Transfer',
      desc:'When there is a single point of contact, it’s easier for the company to transfer knowledge about the client’s account and history. This is particularly important if there is turnover or if multiple team members need to be involved in servicing the client.',
    },
    {
      name:'Enchanced Client Satisfaction',
      desc:'Overall, having a dedicated point of contact enhances the client’s experience. Clients feel valued when they have someone who understands their needs and can provide personalized assistance, leading to higher levels of satisfaction and potential for long-term partnerships.',
    },
  ]

  return (
    <>
      <section className="mt-20">
        <Heading
          data-aos="fade-up"
          className="text-black font-medium text-center  text-3xl md:text-[30px] tracking-[2px] sm:tracking-[5px]"
          level={1}
        >
          OUR SERVICES
        </Heading>

        {/* Services Card */}
        <div
          data-aos="fade-up"
          className="mt-8 grid sm:flex flex-wrap justify-center gap-6"
        >
          <ServicesCard alt="" image_src={ApartmentOfficerImg}>
            <div className="font-medium text-2xl m-auto text-center">
              Apartment <br />
              Security
            </div>
          </ServicesCard>
          <ServicesCard alt="" image_src={MedicalOfficerImg}>
            <div className="font-medium text-2xl m-auto text-center">
              Bank <br />
              Security
            </div>
          </ServicesCard>

          <ServicesCard alt="" image_src={BankSecurityOfficerImg}>
            <div className="font-medium text-2xl m-auto text-center">
              Hotel <br />
              Security
            </div>
          </ServicesCard>

          {/* 
          <img src={BankSecurityOfficerImg} alt="bank" /> */}

          <ServicesCard alt="" image_src={HotelSecurityOfficerImg}>
            <div className="font-medium text-2xl m-auto text-center">
              Medical Facilities <br />
              Security
            </div>
          </ServicesCard>
          <ServicesCard alt="" image_src={MobilePatrol}>
            <div className="font-medium text-2xl m-auto text-center">
              Mobile Patrol
            </div>
          </ServicesCard>
        </div>
      </section>
      <section className="bg-grey-7/10">
      <div className="container pb-16">
        <Heading
          data-aos="fade-up"
          level={3}
          className="text-black text-2xl md:text-3xl text-center mt-[60px] mb-8 sm:mb-12 pt-[50px] font-semibold"
        >
          Key To The Success of Our Operation.
        </Heading>
          <div className="grid md:grid-cols-2 gap-5 text-black">
            {
              success.map((item,key) => (
                <div key={key} className="bg-primary/5 p-4 rounded-md">
                  <div className="flex items-center gap-2 text-primary">
                    <BiCheck />
                    <p className="font-semibold mb-1">{item.name}</p>
                  </div>
                  <p className="pl-5 opacity-80">{item.desc}</p>
                </div>
              ))
            }
        </div>
        {/* <ResponsiveSlider /> */}
      </div>
      </section>
      <div className="container mb-20 pb-12 md:pb-24">
      <Heading
          data-aos="fade-up"
          level={3}
          className="text-black text-2xl md:text-3xl text-center mt-[60px] mb-8 pt-[50px] font-semibold"
        >
          Joint Power Fire Services.
        </Heading>
        <p className="text-left sm:text-center text-black text-base sm:text-xl">
        As a firewatch service provider, we understand that ensuring the safety of personnel, infrastructure, and assets from fire hazards is a fundamental obligation for every organization. Conducting routine inspections and testing of fire protection systems forms a crucial component of a comprehensive fire safety program.

        </p>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center px-3 gap-1 rounded-2xl mt-10">
          <div data-aos="fade-up" className="pr-0 md:pr-4 rounded-xl">
            <NextImage
              src={fire1}
              alt="joint security officer"
              className="mr-0 md:mr-5 mb-5 md:mb-0 !rounded-xl h-[200px] w-[300px] md:w-[270.59px] md:h-[248.54px] lg:w-[500px] lg:h-[300px]"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col text-center md:text-left gap-4 lg:px-4 lg:w-[53%]"
          >
            <Text
              data-aos="fade-up"
              className="ml-0 md:ml-10 text-left  block text-base sm:text-xl leading-relaxed text-black"
            >
              Fire protection services play a critical role in safeguarding individuals, property, and the environment from the devastating effects of fires. These services encompass both preventive measures to avert fires and responsive strategies to effectively manage and extinguish them.            </Text>
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-3 gap-1 rounded-2xl mt-10 md:mt-0">
          <div data-aos="fade-up" className="pr-0 md:pr-4 rounded-xl">
            <NextImage
              src={fire2}
              alt="joint security officer"
              className="mb-5 md:mb-0 ml-0 md:ml-10 !rounded-xl h-[200px] w-[300px] md:w-[270.59px] md:h-[248.54px] lg:w-[500px] lg:h-[300px]"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col text-center md:text-left gap-4 lg:px-4 lg:w-[53%]"
          >
            <Text
              data-aos="fade-up"
              className="text-left  block text-base sm:text-xl leading-relaxed text-black"
            >
            The design, installation, and maintenance of fire detection systems, sprinkler systems, fire alarms, and fire-resistant building materials require meticulous attention to detail. These precautions are essential in minimizing the risk of fire outbreaks and providing timely alerts to occupants.
            Joint Power Security Service Inc. offers Statewide Fire watch services and is usually prompt, and we often have a guard at your location in less than 4 hours when contacted.              </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
