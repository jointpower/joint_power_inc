import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import { ContactUs } from '@/components/organisms/Sections/ContactUs/ContactUs'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

const SecurityGuardInCalifornia = () => {

    const problems = [ 'Access management', 
     'Theft',
    'Vandalism',
    'Fire Watch',
    'Loitering',
    'Asset protection',
    'Employee protection',
    'Terminations',
    'VIP protection',
    'Disgruntled employees',
    'Unruly customers',
      ];
    const offerings = [
        {
            title:'Access control to parking areas and buildings',
            desc:'Any size event, from small gatherings to huge, filled arenas',
        },
        {
            title:'Enforce property regulations and company policies',
            desc:'24/7 security and monitoring',
        },
        {
            title:'Monitor for suspicious behavior',
            desc:'Nightclub security and bar security of any nature',
        },
        {
            title:'Perform regular and irregular mobile patrols',
            desc:'When the cargo or customer needs trained specialists, we’re here',
        },
        {
            title:'Maintain visitor logs',
            desc:'We have guarded and protected many VIP’s of all stature',
        },
        {
            title:'Provide fire watch services',
        },
        {
            title:'Lobby and front gate protection',
        },
         
    ]


const states = [
      { name: 'Los Angeles', link: '/california/los-angeles' },
      { name: 'Anaheim', link: '/california/anaheim' },
      { name: 'Carlsbad', link: '/california/carlsbad' },
      { name: 'Fresno', link: '/california/fresno' },
      { name: 'San Francisco & Oakland', link: '/california/san-francisco' },
      { name: 'Redding & Shasta County', link: '/california/redding' },
      { name: 'Bakersfield & Kern County', link: '/california/bakersfield' },
      { name: 'Sacramento & Stockton', link: '/california/sacramento' },
      { name: 'Santa Cruz', link: '/california/santa-cruz' },
      { name: 'San Bernardino', link: '/california/san-bernardino' },
]

const business_issues = [
    'Access control to parking areas and buildings',
'Enforce property regulations and company policies',
'Monitor for suspicious behavior',
'Perform regular and irregular mobile patrols',
'Maintain visitor logs',
'Provide fire watch services',
'Lobby and front gate protection',
]

  return (
    <div className="mt-[120px] ">
        <Layout>
        <Banner text={"Security Guard Company in California"} />
            <div className="text-black max-w-[1300px] px-5 sm:px-10 m-auto gap-10 grid lg:grid-cols-[2.5fr,1fr]">
                <div className="mt-12 ">
                <h4 className='text-xl sm:text-2xl mb-10 text-primary font-bold'>Hire a security guard in <br className='block sm:hidden' /> California, <a href="tel:+14244637600"> Call (424)-463-7600.</a></h4>
                    <div className='text-sm'>
                        <p className='leading-6 tracking-wide'>
                        California is a state in the Western United States. With over 38.9 million residents across a total area of approximately 163,696 square miles, it is the most populous U.S. state, the third-largest U.S. state by land mass, and the most populated subnational entity in North America. California borders Oregon to the north, Nevada and Arizona to the east, and the Mexican state of Baja California to the south; it has a coastline along the Pacific Ocean to the west. JOINT POWER SECURITY SERVICES INC is the premier security guard services company in the State of California. We offer security guards and event security to all the major cities in California including Los Angeles, Anaheim, San Diego, San Jose, San Francisco, Fresno, Beverly Hills, Sacramento and Long Beach. We take great pride in our work throughout California and the surrounding regions.                         </p>
                        <p className='my-5 leading-6 tracking-wide'>
                        JOINT POWER SECURITY SERVICES INC boasts an extremely skilled and highly trained staff of uniformed guards, movie film set security, event staff, special event security, trade show security, executive security, on-set security and business security technology consultants that have years of hands-on experience.                        </p>
                        <p className='my-5 leading-6 tracking-wide'>
                        JOINT POWER SECURITY SERVICES INC continues to be the most trusted security guard company in California. Our professionally trained and licensed security teams provide unmatched services to businesses, events, and private clients searching for answers to their security problems. When they need reliable, professional security guards they can trust, they call JOINT POWER SECURITY SERVICES INC.                         </p>
                        <p className='my-5 leading-6 tracking-wide'>
                        If you operate a business, manage events or require short-term / long-term security guards for personal or commercial needs, our highly-trained guards provide a variety of services to meet your needs. From mobile patrols and temporary assignments to VIP and executive protection, we have the staff you need to protect what is most valuable to you. We work with some of the finest guards available in the industry including off duty and retired law enforcement and military personnel. Our officers are bonded and insured so you can rest easy knowing that you have a trusted team on your side. And with training in the latest security strategies and technology, our guards can handle any risk that comes their way.                         </p>
                        <p className='leading-6 tracking-wide'>
                        Contact JOINT POWER SECURITY SERVICES INC if you have any security concerns or needs of any type or size. JOINT POWER SECURITY SERVICES INC provides on-demand security services to all parts of California including Los Angeles, Beverly Hills, Hollywood, San Francisco, San Diego, Sacramento, San Jose, Palm Springs, Long Beach, Oakland, Fresno, Bakersfield, Anaheim, Riverside, Stockton, Chula Vista, Fremont, San Bernardino, Huntington Beach, Ventura, Santa Barbara, Oxnard, Ridgecrest,  Santa Cruz, Redding, Hayfork, Santa Rosa, Eureka, Crescent city and more.                        </p>
                        <p className='leading-6 tracking-wide font-semibold mt-5'>
                        Contact JOINT POWER SECURITY SERVICES INC today at (424)-463-7600 to learn more about our security services and to see how our security teams can protect you and your business. 
                        </p>
                        <div className='grid sm:grid-cols-2 gap-x-20 gap-y-5 mt-10'>
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
                        <div className='grid sm:grid-cols-2 gap-x-20 gap-y-7 mt-7'>
                            {
                                offerings.map((item,idx) => (
                                    <div key={idx} className='flex items-start gap-5'>
                                        <span>< FaCaretRight className='text-secondary' /></span>
                                        <span className="span">
                                            <span className='font-semibold text-primary whitespace-normal sm:whitespace-nowrap'>{item.title} </span>
                                            {/* <span>{item.desc}</span> */}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-10">
                            <div className="h-[400px] rounded-md overflow-hidden bg-gray-100">
                            <iframe 
                                className='rounded-md overflow-hidden'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512754.968756722!2d-124.59701070310881!3d37.15136466310988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sng!4v1711535816020!5m2!1sen!2sng"                                 width="100%" 
                                height="400" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>Commercial Security Services.</h4>
                        <p className='mb-5 leading-6 tracking-wide'>
                        Businesses and commercial buildings face unprecedented threats today. California business owners are not immune to this trend. No matter the size of your business or the industry you operate in, security should be one of your top concerns. High-quality security is no longer a luxury afforded to only the largest and most successful companies; all businesses need to make security a priority.                         
                        </p>
                        <p className='mb-5 leading-6 tracking-wide'>
                        At JOINT POWER SECURITY SERVICES INC, we understand the challenges that business owners face. We work diligently to stay ahead of the trends to provide our customers with cutting-edge technology, the latest in training techniques and innovative solutions to meet their needs. Our commercial security services address common threats such as theft and vandalism as well as more serious dangers that your business could face:                        
                        </p>
                        <div className='grid gap-x-20 gap-y-6 mt-10'>
                            {
                                business_issues.map((item,idx) => (
                                    <div key={idx} className='flex items-center gap-5'>
                                        <span>< FaCaretRight className='text-secondary' /></span>
                                        <span className='font-semibold text-primary'>{item}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>Now serving all Major cities in <b>california</b> .</h4>
                        <p className='leading-6 tracking-wide text'>
                        Joint Power Service provides armed, unarmed, Firewatch and event staff security guards to all of California. We are also world famous for our Event and VIP Security Services.
                        </p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-20 gap-y-6 mt-10'>
                            {
                                states.map((item,idx) => (
                                    <Link href={item.link} key={idx} className='flex items-center gap-5'>
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
                    <h4 className='text-xl mb-10 text-primary font-medium'>Request a Quote</h4>
                        {/* <div className="grid grid-cols-2 gap-x-5 text-sm ">
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
                            Submit
                        </button>
                        </div> */}
                        <ContactUs
                            isContactDetailsRequired={false}
                            className="md:mt-0 mx-0"
                            noHeader={true}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                {/* @ts-ignore */}
            <marquee className='text-lg sm:text-xl my-10  mb-0 text-primary font-bold'>Request an Instant quote <b><a href="tel:+14244637600"> Call now (424)-463-7600</a></b></marquee>
            </div>
        </Layout>
    </div>
  )
}

export default SecurityGuardInCalifornia
