import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import { ContactUs } from '@/components/organisms/Sections/ContactUs/ContactUs'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

const MultipleLocationSecurity = () => {

    const problems = [
       'Emergency Fire Watch',
       'Residential & Business Building Security',
       'Unarmed Security Coverage',
       'Access Control',
       'Loss Prevention',
       'Construction Site Security',
      'Warehouse Security',
       'Events & Concerts',
       'Background Checks and more',
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
        { name: 'Houston', link: '/texas/houston' },
        { name: 'Dallas', link: '/texas/dallas' },
        { name: 'Austin', link: '/texas/austin' },
        { name: 'Fort Worth', link: '/texas/fort-worth' },
        { name: 'El Paso', link: '/texas/el-paso' },
        { name: 'Arlington', link: '/texas/arlington' },
        { name: 'Los Angeles', link: '/california/los-angeles' },
        { name: 'Anaheim', link: '/california/anaheim' },
        { name: 'Carlsbad', link: '/california/carlsbad' },
        { name: 'Fresno', link: '/california/fresno' },
        { name: 'San Francisco & Oakland', link: '/california/san-francisco' },
        { name: 'Redding & Shasta County', link: '/california/redding' },
        { name: 'Bakersfield & Kern County', link: '/california/bakersfield' },
        { name: 'Sacramento & Stockton', link: '/california/sacramento' },
        { name: 'Santa Cruz', link: '/california/santa-cruz' },
  
      ];

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
        <Banner text={"Multi Location Security"} />
            <div className="text-black max-w-[1300px] px-5 sm:px-10 m-auto gap-10 grid lg:grid-cols-[2.5fr,1fr]">
                <div className="mt-12 ">
                    <h4 className='text-2xl mb-10 text-primary font-bold'>Multiple Security For All Of Your Franchise Locations</h4>
                    <div className='text-sm'>
                        <p className='leading-6 tracking-wide'>
                            As a franchise business with multiple sites, you have unique security needs. JOINT POWER SECURITY SERVICES INC is one name to remember to help you provide security services to multiple sites; secure valuable assets and employees; and reduce shrinkage.                        </p>
                        {/* <p className='my-5 leading-6 tracking-wide'>
                        JOINT POWER SECURITY SERVICES INC provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. JOINT POWER SECURITY SERVICES INC will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the security industry. JOINT POWER SECURITY SERVICES INC provide innovative solutions for businesses and executives in the state of Texas. Yes security is a top concern, Too many high-value assets should be protected all time.                        </p>
                        <p className='leading-6 my-5 tracking-wide'>
                        As the leading security guard company in California and Texas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.                         
                        </p>
                        <p className='leading-6 my-5 tracking-wide'>
                        At JOINT POWER SECURITY SERVICES INC, we take great pride in our reputation for providing the highest level of customer service and fair, affordable pricing. Our California and Texas customers feel confident that they are receiving the best security personnel and solutions for their needs because of the personalized attention our security specialists provide. Our team will work with you to discover your unique security threats and recommend the right services to meet your needs and your budget. With customized security solutions, you will have peace of mind that your security threats are covered.                          </p>
                        <p className='leading-6 my-5 tracking-wide'>
                        If you operate a business, manage events or require short-term / long-term security guards for personal or commercial needs, our highly-trained guards provide a variety of services to meet your needs. From mobile patrols and temporary assignments to VIP and executive protection, we have the staff you need to protect what is most valuable to you. We work with some of the finest guards available in the industry including off duty and retired law enforcement and military personnel. Our officers are bonded and insured so you can rest easy knowing that you have a trusted team on your side. And with training in the latest security strategies and technology, our guards can handle any risk that comes their way.                          </p>
                        <p className='leading-6 my-5 tracking-wide'>
                        As the leading security guard company in California and Texas, JOINT POWER SECURITY SERVICES INC is proud of our reputation for providing the highest quality service at fair rates. We take training seriously and ensure that when a guard arrives on your premises, they are ready to work hard on your behalf. Security is serious business, and we treat all of our customers like their business is our own.                        
                         </p> */}
                        <p className='leading-6 my-5 tracking-wide'>
                        We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.                         </p>
                         <p className='leading-6 tracking-wide font-semibold mt-5'>
                         We cover over 100 cities across California and Texas 
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
                      
                        <div className="mt-10">
                            <div className="h-[400px] rounded-md overflow-hidden bg-gray-100">
                            <iframe 
                                className='rounded-md overflow-hidden'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52954007.797566555!2d-161.80549776569057!3d35.89664069352006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1710733899737!5m2!1sen!2sng" 
                                width="100%" 
                                height="400" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        {/* <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>Commercial Security Services.</h4> */}
                        <p className='mt-10 mb-5 leading-6 tracking-wide text-sm'>
                        We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.                        </p>
                       {/* <p className='mb-5 leading-6 tracking-wide text-xs'>
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
                        </div> */}
                        <p className='leading-6 tracking-wide font-semibold mt-5'>
                        Request an Instant QUOTE... <br />
                            Short or long term security guard services, reliable, affordable and carefully fitted to your needs.                        
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="request-demo">
                    <h4 className='text-xl mb-10 text-primary font-medium pl-5'>Request a Quote</h4>
                    <ContactUs
                        isContactDetailsRequired={false}
                        className="md:mt-0"
                        noHeader={true}
                    />
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                {/* @ts-ignore */}
            <marquee className='text-lg sm:text-xl my-10  mb-0 text-primary font-bold'>Request an Instant quote <b>Call Now: <a href="tel:+14244637600"> (424)-463-7600.</a></b>.</marquee>
            </div>
        </Layout>
    </div>
  )
}

export default MultipleLocationSecurity
