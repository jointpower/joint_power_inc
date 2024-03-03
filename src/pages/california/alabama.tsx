import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
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
        { name: 'Alaska', link: '/california/alaska' },
        { name: 'Arizona', link: '/california/arizona' },
        { name: 'Arkansas', link: '/california/arkansas' },
        { name: 'Colorado', link: '/california/colorado' },
        { name: 'Connecticut', link: '/california/connecticut' },
        { name: 'Delaware', link: '/california/delaware' },
        { name: 'Florida', link: '/california/florida' },
        { name: 'Georgia', link: '/california/georgia' },
    ]




  return (
    <div className="mt-[120px] ">
        <Layout>
        <Banner text={"Security Guard Companies in Alabama"} />
            <div className="text-black max-w-[1300px] px-5 sm:px-10 m-auto gap-10 grid ">
                <div className="mt-12 ">
                    <h4 className='text-2xl md:text-3xl text-center mb-10 text-primary font-bold'>Hire a security guard in Alabama now 844-254-8273.</h4>
                    <div className='text-sm'>
                        <p className='leading-6 tracking-wide'>
                        Alabama, a bustling city nestled in Texas, hosts a population of over 2 million residents across approximately 412 square miles (1,068 km2), making it a significant urban center. Surrounded by Houston, San Antonio, and Austin, Alabama thrives with diverse cultures and economic vitality.
                        </p>
                        <p className='my-5 leading-6 tracking-wide'>
                        Security is paramount in Alabama, where Alabama Security Agency shines as a top provider. Renowned for professionalism and expertise, they offer tailored solutions for businesses and individuals, ensuring comprehensive protection. Their skilled personnel handle various security challenges, from downtown districts to residential areas, fostering safety and peace of mind.
                        </p>
                        <p className='leading-6 tracking-wide'>
                        Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
                        </p>
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
                        If you need security guard services in: <span className='font-medium text-secondary'> ALABAMA or somewhere throughout California </span> then contact Joint Power Service today and put your fears to rest. We provide free consultations and will consider any security concerns or needs regardless of risk.
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443875.0336641795!2d-89.32224541733397!3d32.54859585089966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88867f341f4bfe75%3A0x5e55343553c8cce9!2sAlabama%2C%20USA!5e0!3m2!1sen!2sng!4v1709270901869!5m2!1sen!2sng" 
                                width="100%" 
                                height="500" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>We are also at other major cities in <b>california</b> .</h4>
                        <p className='leading-6 tracking-wide text-xs'>
                        Joint Power Service provides armed, unarmed, Firewatch and event staff security guards to all of California. We are also world famous for our Event and VIP Security Services.
                        </p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-20 gap-y-6 mt-10'>
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

export default SecurityGuardInCalifornia
