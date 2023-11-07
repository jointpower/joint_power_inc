import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import { Goals } from "@/components/molecules/Goal/Goals";
import LineMask from "public/line-mask.png";
import { useMediaQuery } from "@/base/MediaQuery";
import Text from "@/components/atom/Text/Text";

const services = [
  {
    id: 1,
    service: "Loss Prevention",
  },
  {
    id: 2,
    service: "Roving Patrol ",
  },
  {
    id: 3,
    service: "Construction Site Security",
  },
  {
    id: 4,
    service: "Warehouse Security",
  },
  {
    id: 5,
    service: "Power/Gas Station Security",
  },
  {
    id: 6,
    service: "Social Event Security",
  },
  {
    id: 7,
    service: "Alarm Monitoring & Response",
  },
  {
    id: 8,
    service: "Distribution Centers Security  ",
  },
  {
    id: 9,
    service: "Schools & Church Security  ",
  },
  // {
  //   id: 10,
  //   service: 'Shopping Mall & Stores ',
  // },

  {
    id: 11,
    service: "Apartment & Office Building Security ",
  },
  {
    id: 12,
    service: "Restaurants Security ",
  },
  {
    id: 13,
    service: "Gated Community Security ",
  },
  {
    id: 14,
    service: "Hospitals & Care Facilities Security ",
  },
  {
    id: 15,
    service: "Access Control",
  },
  {
    id: 16,
    service: "Performing Foot Patrol",
  },
  {
    id: 17,
    service: "Parking Lot Control",
  },
  {
    id: 18,
    service: "Hotel Security",
  },
  {
    id: 19,
    service: "Security Consulting",
  },
  // {
  //   id: 20,
  //   service: 'Hospitals & Care Facilities',
  // },
  // {
  //   id: 21,
  //   service: 'Automotive Dealers',
  // },
  // {
  //   id: 22,
  //   service: 'Access Control',
  // },
  // {
  //   id: 23,
  //   service: 'Performing Foot Patrol',
  // },
  // {
  //   id: 24,
  //   service: 'Fast food establishments',
  // },
  // {
  //   id: 25,
  //   service: 'Parking Lot Control',
  // },
  // {
  //   id:26,
  //   service:'Parking Lot Control'
  // },
];

// Aviation Security
// Shopping Mall & Stores
// Schools & Churches
// Apartment & Office Building
// Restaurants
// Gated Communities
// Hospitals & Care Facilities
// Automotive Dealers & Warehouses
// Access Control
// Performing Foot Patrol
// Fast food establishments
// Parking Lot Control
// Hotel Security

export const Commitment = () => {
  const xtraSmall = useMediaQuery("(max-width: 720px)");
  const commitments = [
    {
      messageBody:
        "Joint Power  provide personnal for hotel, apartments and social events which provides premium sercurity services to businesses and indivisuals.",
    },
    // {
    //   messageBody:
    //     "Joint Power  provide personnal for hotel, apartments and social events which provides premium sercurity services to businesses and indivisuals.",
    // },
    // {
    //   messageBody:
    //     "Joint Power  provide personnal for hotel, apartments and social events which provides premium sercurity services to businesses and indivisuals.",
    // },
  ];

  return (
    <section className="flex flex-col container ">
      <div className="mt-24 md:mt-48 bg-normal">
        <div>
          <Heading data-aos="fade-up"
            level={2}
            className="font-medium  mb-[.5rem] pt-[30px]  text-3xl text-center uppercase"
          >
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-secondary ">
              Commited{' '}
            </span> */}
            <span className="text-secondary">our services</span>
          </Heading>
        </div>
        <p data-aos="fade-up" className="text-base md:text-2xl text-center mb-5 md:mb-[80px] lg:mt-[10px] text-gray-200">
          At JPS, We offer a whole range of services which ranges from the
          following..
        </p>
        <div
          className={`px-3 sm:px-10 pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-white text-center py-2 lg:h-[40rem] overflow-y-auto`}
        >
          {/* {commitments.map(({ messageBody }, index) => (
            <div
              className="bg-normal w-[350px] md:w-[417px] rounded-md md:rounded-2xl "
              key={index}
            >
              <Text className="text-white px-[43px] lg:px-[75px] py-[30px] lg:py-[15px] text-2xl text-center font-medium">
                {messageBody}
              </Text>
            </div>
          ))} */}

          {services?.length
            ? services?.map((data, index) => {
                return (
                  <button data-aos="fade-up"
                    key={index}
                    className={`min-h-[70px] md:min-h-[unset] hover:bg-black hover:text-white transition-all duration-200 ease-linear p-3 grid place-content-center text-center content-center rounded bg-slate-200 text-normal font-medium capitalize py-2`}
                  >
                      <p>{data.service}</p>
                  </button>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};
