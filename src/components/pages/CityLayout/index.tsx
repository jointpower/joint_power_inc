import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

type Props = {
    name:string,
    Description: any,
    mapSrc:string,
    state?:string
}

const CityLayout = ({ name, Description, mapSrc , state}: Props) => {

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
        { name: 'Alaska', link: '' },
        { name: 'Arizona', link: '' },
        { name: 'Arkansas', link: '' },
        { name: 'Colorado', link: '' },
        { name: 'Connecticut', link: '' },
        { name: 'Delaware', link: '' },
        { name: 'Florida', link: '' },
        { name: 'Georgia', link: '' },
    ]

  return (
    <div className="mt-[120px] ">
        <Layout>
        <Banner text={`Security Guard Companies in ${name}`} />
            <div className="text-black max-w-[1300px] px-5 sm:px-10 m-auto gap-10 grid ">
                <div className="mt-12 ">
                    <h4 className='text-2xl md:text-3xl !leading-10 mb-10 text-primary font-bold text-center'>Hire a security guard in {name} now. <br /> Call (424)-463-7600.</h4>
                    <div className='text-sm'>
                        <Description />
                    <div 
                    className={`mt-10 px-3 sm:px-10 pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-white text-center py-2`}
                    >
                            {
                                problems.map((item,idx) => (
                                <button data-aos=""
                                    key={idx}
                                    className={`h-[100px] hover:bg-black hover:text-white transition-all duration-200 ease-linear p-3 grid place-content-center text-center content-center rounded bg-slate-200 text-normal font-medium capitalize py-2`}
                                >
                                    <p>{item}</p>
                                </button>
                                ))
                                //     <div key={idx} className='flex items-center gap-3'>
                                //         <span>< BiCheck size={18} className='text-secondary' /></span>
                                //         <span className='font-medium text-primary'>{item}</span>
                                //     </div>
                            }
                    </div>
                        <p className='leading-6 tracking-wide mt-10'>
                        If you need security guard services in: <span className='font-medium text-secondary'> {name} or somewhere throughout {state || 'California'} </span> then contact Joint Power Service today and put your fears to rest. We provide free consultations and will consider any security concerns or needs regardless of risk.
                        </p>
                        <div className='grid sm:grid-cols-2 gap-x-20 gap-y-7 mt-7'>
                            {
                                offerings.map((item,idx) => (
                                    <div key={idx} className='flex items-start gap-3'>
                                        <span>< BiCheck size={18} className='text-secondary' /></span>
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
                                src={mapSrc} 
                                width="100%" 
                                height="500" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
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
        </Layout>
    </div>
  )
}

export default CityLayout
