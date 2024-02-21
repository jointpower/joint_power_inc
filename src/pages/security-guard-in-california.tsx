import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

const SecurityGuardInCalifornia = () => {

    const problems = [ 'Theft', 'Stalkers', 'Break-ins','Large Crowd and Demonstrations', 'Terrorists','Violent Attacks','Fire preventions','VIP protections' ];
    const offerings = [
        {
            title:'Event security',
            desc:'Any size event, from small gatherings to huge, filled arenas',
        },
        {
            title:'Around the clock security',
            desc:'24/7 security and monitoring',
        },
        {
            title:'Club security',
            desc:'Nightclub security and bar security of any nature',
        },
        {
            title:'Armed security',
            desc:'When the cargo or customer needs trained specialists, we’re here',
        },
        {
            title:'VIP security',
            desc:'We have guarded and protected many VIP’s of all stature',
        },
        {
            title:'Business Ownners',
        },
        {
            title:'Private Properties',
        },
        {
            title:'Parties',
        },
        {
            title:'Concerts',
        },
        {
            title:'Stadiums',
        },
        {
            title:'Night Clubs',
        },
        {
            title:'Public Expositions and Gatherings',
        },
    ]

    const states = [
  { name: 'California', link: '/california/california' },
  { name: 'Alabama', link: '/california/alabama' },
  { name: 'Alaska', link: '/california/alaska' },
  { name: 'Arizona', link: '/california/arizona' },
  { name: 'Arkansas', link: '/california/arkansas' },
  { name: 'Colorado', link: '/california/colorado' },
  { name: 'Connecticut', link: '/california/connecticut' },
  { name: 'Delaware', link: '/california/delaware' },
  { name: 'Florida', link: '/california/florida' },
  { name: 'Georgia', link: '/california/georgia' },
  { name: 'Hawaii', link: '/california/hawaii' },
  { name: 'Idaho', link: '/california/idaho' },
  { name: 'Illinois', link: '/california/illinois' },
  { name: 'Indiana', link: '/california/indiana' },
  { name: 'Iowa', link: '/california/iowa' },
  { name: 'Kansas', link: '/california/kansas' },
  { name: 'Kentucky', link: '/california/kentucky' },
  { name: 'Louisiana', link: '/california/louisiana' },
  { name: 'Maine', link: '/california/maine' },
  { name: 'Maryland', link: '/california/maryland' },
  { name: 'Massachusetts', link: '/california/massachusetts' },
  { name: 'Michigan', link: '/california/michigan' },
  { name: 'Minnesota', link: '/california/minnesota' },
  { name: 'Mississippi', link: '/california/mississippi' },
  { name: 'Missouri', link: '/california/missouri' },
  { name: 'Montana', link: '/california/montana' },
  { name: 'Nebraska', link: '/california/nebraska' },
  { name: 'Nevada', link: '/california/nevada' },
  { name: 'New Hampshire', link: '/california/new-hampshire' },
  { name: 'New Jersey', link: '/california/new-jersey' },
  { name: 'New Mexico', link: '/california/new-mexico' },
  { name: 'New York', link: '/california/new-york' },
  { name: 'North Carolina', link: '/california/north-carolina' },
  { name: 'North Dakota', link: '/california/north-dakota' },
  { name: 'Ohio', link: '/california/ohio' },
  { name: 'Oklahoma', link: '/california/oklahoma' },
  { name: 'Oregon', link: '/california/oregon' },
  { name: 'Pennsylvania', link: '/california/pennsylvania' },
  { name: 'Rhode Island', link: '/california/rhode-island' },
  { name: 'South Carolina', link: '/california/south-carolina' },
  { name: 'South Dakota', link: '/california/south-dakota' },
  { name: 'Tennessee', link: '/california/tennessee' },
  { name: 'Texas', link: '/california/texas' },
  { name: 'Utah', link: '/california/utah' },
  { name: 'Vermont', link: '/california/vermont' },
  { name: 'Virginia', link: '/california/virginia' },
  { name: 'Washington', link: '/california/washington' },
  { name: 'West Virginia', link: '/california/west-virginia' },
  { name: 'Wisconsin', link: '/california/wisconsin' },
  { name: 'Wyoming', link: '/california/wyoming' }
    ]

  return (
    <div className="mt-[120px] ">
        <Layout>
        <Banner text={"Security Guard Companies in California"} />
            <div className="text-black max-w-[1300px] px-10 m-auto gap-10 grid grid-cols-[2.5fr,1fr]">
                <div className="mt-12 ">
                    <h4 className='text-2xl mb-10 text-primary font-bold'>Hire a security guard in California now 844-254-8273.</h4>
                    <div className='text-sm'>
                        <p className='leading-6 tracking-wide'>
                        California is a state in the Western United States. With over 38.9 million residents[6] across a total area of approximately 163,696 square miles (423,970 km2),[11] it is the most populous U.S. state, the third-largest U.S. state by area, and the most populated subnational entity in North America. California borders Oregon to the north, Nevada and Arizona to the east, and the Mexican state of Baja California to the south; it has a coastline along the Pacific Ocean to the west. Joint Power Service is the premier security guard services company in the State of California. We offer security guards and event security to all the major cities in California including Los Angeles, Anaheim, San Diego, San Jose, San Francisco, Fresno, Beverly Hills, Sacramento, and Long Beach. We take great pride in our work throughout California and the surrounding regions. Joint Power Service boasts an extremely skilled and highly trained staff of uniformed guards, movie film set security, event staff, special event security, trade show security, armed security guards, executive security, on-set security, and business security technology consultants that have years of hands-on experience. Contact Joint Power Service if you have any security concerns or needs of any type or size. Joint Power Services provides on-demand security services to all parts of California including Los Angeles, Beverly Hills, Hollywood, San Francisco, San Diego, Sacramento, San Jose, Palm Springs, Long Beach, Oakland, Fresno, Bakersfield, Anaheim, Riverside, Stockton, Chula Vista, Fremont, San Bernardino, Huntington Beach and more.
                        </p>
                        <p className='my-5 leading-6 tracking-wide'>
                        In California, security is paramount, and numerous reputable security companies stand out. California Security Agency is a prominent name, offering top-notch services. Among the top security guard companies in California, their expertise ensures comprehensive protection. With a focus on safeguarding businesses and individuals, security companies in California play a vital role in maintaining public safety.
                        </p>
                        <p className='leading-6 tracking-wide'>
                        Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
                        </p>
                        <div className='grid grid-cols-2 gap-x-20 gap-y-5 mt-10'>
                            {
                                problems.map((item,idx) => (
                                    <div key={idx} className='flex items-center gap-5'>
                                        <span>< FaCaretRight className='text-secondary' /></span>
                                        <span className='font-medium text-primary'>{item}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <p className='leading-6 tracking-wide mt-10'>
                        If you need security guard services in: <span className='font-medium text-secondary'> Los Angeles, Anaheim, San Diego, San Jose, Beverly Hills, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Riverside or somewhere throughout California </span> then contact Joint Power Service today and put your fears to rest. We provide free consultations and will consider any security concerns or needs regardless of risk.
                        </p>
                        <div className='grid grid-cols-2 gap-x-20 gap-y-7 mt-7'>
                            {
                                offerings.map((item,idx) => (
                                    <div key={idx} className='flex items-start gap-5'>
                                        <span>< FaCaretRight className='text-secondary' /></span>
                                        <span className="span">
                                            <span className='font-semibold text-primary whitespace-nowrap'>{item.title} {item.desc ? ' - ' : null} </span>
                                            <span>{item.desc}</span>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-10">
                            <div className="">
                            <iframe 
                                className='rounded-md overflow-hidden'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159988272!2d-122.52000171794406!3d37.75767131454352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1708494153587!5m2!1sen!2sng" 
                                width="100%" 
                                height="400" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>Now serving all Major cities in <b>california</b> .</h4>
                        <p className='leading-6 tracking-wide text-xs'>
                        Joint Power Service provides armed, unarmed, Firewatch and event staff security guards to all of California. We are also world famous for our Event and VIP Security Services.
                        </p>
                        <div className='grid grid-cols-3 gap-x-20 gap-y-6 mt-10'>
                            {
                                states.map((item,idx) => (
                                    <Link href={''} key={idx} className='flex items-center gap-5'>
                                        <span>< FaCaretRight className='text-secondary' /></span>
                                        <span className='font-semibold text-primary'>{item.name}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="request-demo">
                    <h4 className='text-xl mb-10 text-primary font-medium'>Request a Demo</h4>
                        <div className="grid grid-cols-2 gap-x-5 text-sm ">
                        <InputText
                            placeholder="Comapany Name" 
                            classNames="col-span-2 w-full px-[21px] py-3 text-grey-2 mb-[14.4px] border focus:outline-none rounded"
                            />
                        <InputText
                            placeholder="Email Address"
                            name={"email"}
                            type="email"
                            classNames="col-span-2 w-full px-[21px] py-3 text-grey-2 mb-[14.4px] border focus:outline-none rounded"
                            />
                        <InputText
                            placeholder="First Name" 
                            classNames=" w-full px-[21px] py-3 text-grey-2 mb-[14.4px] border focus:outline-none rounded"
                            />
                        <InputText
                            placeholder="Last Name" 
                            classNames=" w-full px-[21px] py-3 text-grey-2 mb-[14.4px] border focus:outline-none rounded"
                            />
                        <InputText
                            placeholder="phone Number" 
                            classNames=" w-full px-[21px] py-3 text-grey-2 mb-[14.4px] border focus:outline-none rounded"
                            />
                        <InputText
                            placeholder="Service City" 
                            classNames=" w-full px-[21px] py-3 text-grey-2 mb-[14.4px] border focus:outline-none rounded"
                            />
                          <textarea
                                name="more-info"
                                placeholder="How may we help you ?" 
                                className="p-5 border-line w-full col-span-2 text-grey-2 h-[80px] mb-8 mt-2 border focus:outline-none rounded"
                        />
                        <button
                            type="submit"
                            // disabled={loading}
                            className="col-span-2 gap-2 w-full flex items-center justify-center py-3 text-white bg-normal rounded"
                            >
                            {/* {loading ? <ImSpinner2 className="animate-spin" size={20} /> : null} */}
                            Submit
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default SecurityGuardInCalifornia
