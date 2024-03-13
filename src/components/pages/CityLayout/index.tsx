import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

type Props = {
    name:string,
    mapSrc:string,
    state?:string
}

const CityLayout = ({ name, mapSrc , state}: Props) => {

    const problems = [ 
    'Access management', 
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
        { name: 'Alaska', link: '' },
        { name: 'Arizona', link: '' },
        { name: 'Arkansas', link: '' },
        { name: 'Colorado', link: '' },
        { name: 'Connecticut', link: '' },
        { name: 'Delaware', link: '' },
        { name: 'Florida', link: '' },
        { name: 'Georgia', link: '' },
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

    const Description = () => (
        <>
                <p className='leading-6 tracking-wide'>
                JOINT POWER SECURITY SERVICES INC is one of the leading security guard services companies in {name}, {state ?? 'California'}. We provide highly trained and professional security guards and security officers to a variety of businesses and across all industries. Our team has successfully placed guards in commercial and residential buildings, hospitals, event spaces and convention centers, retail establishments and construction sites throughout { name } and the surrounding areas. With a reputation for providing reliable and competent guards, customers across the city have trusted JOINT POWER SECURITY SERVICES INC to provide protection for large-scale events, red carpets, VIP and celebrity functions and sporting events.             
                </p>
                <p className='my-5 leading-6 tracking-wide'>
                We understand that every customer is different when it comes to their security needs. Our security specialists strive to make the process of hiring the best security personnel simple, straightforward and affordable. At JOINT POWER SECURITY SERVICES INC, we are your partners in security, offering customized security solutions to meet the level of security you require. From mobile patrols and access management to trade show security and VIP personal protection, we have the right solutions to meet your needs.             
                </p>
                <p className='mb-5 leading-6 tracking-wide'> 
                At JOINT POWER SECURITY SERVICES INC, we take great pride in our reputation for providing the highest level of customer service and fair, affordable pricing. Our {name} customers feel confident that they are receiving the best security personnel and solutions for their needs because of the personalized attention our security specialists provide. Our team will work with you to discover your unique security threats and recommend the right services to meet your needs and your budget. With customized security solutions, you will have peace of mind that your security threats are covered.             
                </p>
                <p className='mb-5 leading-6 tracking-wide'> 
                If you operate a business, manage events or require short-term / long-term security guards for personal or commercial needs, our highly-trained guards provide a variety of services to meet your needs. From mobile patrols and temporary assignments to VIP and executive protection, we have the staff you need to protect what is most valuable to you. We work with some of the finest guards available in the industry including off duty and retired law enforcement and military personnel. Our officers are bonded and insured so you can rest easy knowing that you have a trusted team on your side. And with training in the latest security strategies and technology, our guards can handle any risk that comes their way.            
                </p>
                <p className='mb-5 leading-6 tracking-wide font-semibold'> 
                Contact JOINT POWER SECURITY SERVICES INC today at (424)-463-7600 to learn more about our security services and to see how our security teams can protect you and your business.             
                </p>
                <p className='mb-5 leading-6 tracking-wide'> 
                JOINT POWER SECURITY SERVICES INC provides a full-spectrum of security guard solutions for your { name } business, organization or personal needs. No matter how big or small your business, we have the experience to provide you with trained and reliable guards. Our security guard services can be tailored to address your greatest concerns including:            
                </p>
                <div className='grid sm:grid-cols-2 gap-x-20 gap-y-5 mt-10'>
                    {
                        problems.map((item,idx) => (
                            <div key={idx} className='flex items-center gap-5 font-medium'>
                                <span>< FaCaretRight className='text-secondary' /></span>
                                <span className='font-semibold text-primary'>{item}</span>
                            </div>
                        ))
                    }
                </div>
                
        </>
    )

  return (
    <div className="mt-[120px] ">
        <Layout>
        <Banner text={`Security Guard Companies in ${name}`} />
            <div className="text-black max-w-[1300px] px-5 sm:px-10 m-auto gap-10 grid ">
                <div className="mt-12 ">
                    <h4 className='text-2xl md:text-3xl !leading-10 mb-10 text-primary font-bold text-center'>Hire a security guard in {name} now. <br /> Call (424)-463-7600.</h4>
                    <div className='text-sm'>
                        <Description />
                        <div className="mt-10">
                            <div className="h-[500px] rounded-md overflow-hidden bg-gray-100">
                            <iframe 
                                className='rounded-md overflow-hidden'
                                src={mapSrc} 
                                width="100%" 
                                height="500" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>Commercial Security Services.</h4>
                        <p className='mb-5 leading-6 tracking-wide text-xs'>
                        Businesses and commercial buildings face unprecedented threats today. {name} business owners are not immune to this trend. No matter the size of your business or the industry you operate in, security should be one of your top concerns. High-quality security is no longer a luxury afforded to only the largest and most successful companies; all businesses need to make security a priority.                         
                        </p>
                        <p className='mb-5 leading-6 tracking-wide text-xs'>
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
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>We are also at other major cities in <b>{state || 'California'}</b> .</h4>
                        <p className='leading-6 tracking-wide text-xs'>
                        Joint Power Service provides armed, unarmed, Firewatch and event staff security guards to all of {state || 'California'}. We are also world famous for our Event and VIP Security Services.
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
                    <div className="request-demo max-w-[500px] m-auto">
                    <h4 className='text-2xl text-center mb-10 text-primary font-medium'>Request a Demo, Today</h4>
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
            <div className='mt-14 text-center'>
                {/* @ts-ignore */}
            <p className='text-lg sm:text-xl my-10  mx-auto text-center mb-0 text-primary font-bold'>Request an in quote <b>Call Now: (424)-463-7600</b>.</p>
            </div>
        </Layout>
    </div>
  )
}

export default CityLayout
