import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

const SecurityGuardInTexas = () => {

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
        { name: 'Houston', link: '/texas/houston' },
        { name: 'San Antonio', link: '/texas/san_antonio' },
        { name: 'Dallas', link: '/texas/dallas' },
        { name: 'Austin', link: '/texas/austin' },
        { name: 'Fort Worth', link: '/texas/fort_worth' },
        { name: 'El Paso', link: '/texas/el_paso' },
        { name: 'Arlington', link: '/texas/arlington' },
        { name: 'Corpus Christi', link: '/texas/corpus_christi' },
        { name: 'Plano', link: '/texas/plano' },
        { name: 'Laredo', link: '/texas/laredo' },
        { name: 'Garland', link: '/texas/garland' },
        { name: 'Irving', link: '/texas/irving' },
        { name: 'Amarillo', link: '/texas/amarillo' },
        { name: 'Grand Prairie', link: '/texas/grand_prairie' },
        { name: 'Brownsville', link: '/texas/brownsville' },
        { name: 'McAllen', link: '/texas/mcallen' },
        { name: 'Killeen', link: '/texas/killeen' },
        { name: 'Frisco', link: '/texas/frisco' },
        { name: 'Mesquite', link: '/texas/mesquite' },
        { name: 'Waco', link: '/texas/waco' },
        { name: 'Carrollton', link: '/texas/carrollton' },
        { name: 'Midland', link: '/texas/midland' },
        { name: 'Denton', link: '/texas/denton' },
        { name: 'Abilene', link: '/texas/abilene' },
        { name: 'Beaumont', link: '/texas/beaumont' },
        { name: 'Odessa', link: '/texas/odessa' },
        { name: 'Round Rock', link: '/texas/round_rock' },
        { name: 'Wichita Falls', link: '/texas/wichita_falls' },
        { name: 'Richardson', link: '/texas/richardson' },
        { name: 'College Station', link: '/texas/college_station' },
        { name: 'Pearland', link: '/texas/pearland' },
        { name: 'Lewisville', link: '/texas/lewisville' },
        { name: 'Tyler', link: '/texas/tyler' },
        { name: 'San Angelo', link: '/texas/san_angelo' },
        { name: 'League City', link: '/texas/league_city' },
        { name: 'Allen', link: '/texas/allen' },
        { name: 'Sugar Land', link: '/texas/sugar_land' },
        { name: 'Edinburg', link: '/texas/edinburg' },
        { name: 'Mission', link: '/texas/mission' },
        { name: 'Longview', link: '/texas/longview' },
        { name: 'Bryan', link: '/texas/bryan' },
        { name: 'Pharr', link: '/texas/pharr' },
        { name: 'Baytown', link: '/texas/baytown' },
        { name: 'Missouri City', link: '/texas/missouri_city' },
        { name: 'Temple', link: '/texas/temple' },
        { name: 'Flower Mound', link: '/texas/flower_mound' },
        { name: 'Harlingen', link: '/texas/harlingen' },
        { name: 'North Richland Hills', link: '/texas/north_richland_hills' },
        { name: 'Victoria', link: '/texas/victoria' },
        { name: 'New Braunfels', link: '/texas/new_braunfels' },
        { name: 'Mansfield', link: '/texas/mansfield' },
        { name: 'Conroe', link: '/texas/conroe' },
        { name: 'Rowlett', link: '/texas/rowlett' },
        { name: 'Port Arthur', link: '/texas/port_arthur' },
        { name: 'Euless', link: '/texas/euless' },
        { name: 'DeSoto', link: '/texas/desoto' },
        { name: 'Cedar Park', link: '/texas/cedar_park' },
        { name: 'Galveston', link: '/texas/galveston' },
        { name: 'Georgetown', link: '/texas/georgetown' },
        { name: 'Bedford', link: '/texas/bedford' },
        { name: 'Pflugerville', link: '/texas/pflugerville' },
        { name: 'Texas City', link: '/texas/texas_city' },
        { name: 'Wylie', link: '/texas/wylie' },
        { name: 'Haltom City', link: '/texas/haltom_city' },
        { name: 'Keller', link: '/texas/keller' },
        { name: 'Sherman', link: '/texas/sherman' },
        { name: 'Hurst', link: '/texas/hurst' },
        { name: 'Lancaster', link: '/texas/lancaster' },
        { name: 'Friendswood', link: '/texas/friendswood' },
        { name: 'Rosenberg', link: '/texas/rosenberg' },
        { name: 'Texarkana', link: '/texas/texarkana' },
        { name: 'San Juan', link: '/texas/san_juan' },
        { name: 'Del Rio', link: '/texas/del_rio' },
        { name: 'Burleson', link: '/texas/burleson' },
        { name: 'Weslaco', link: '/texas/weslaco' },
        { name: 'Kyle', link: '/texas/kyle' },
        { name: 'Schertz', link: '/texas/schertz' },
        { name: 'Farmers Branch', link: '/texas/farmers_branch' },
        { name: 'Duncanville', link: '/texas/duncanville' },
      ];

  return (
    <div className="mt-[120px] ">
        <Layout>
        <Banner text={"Security Guard Companies in Texas"} />
            <div className="text-black max-w-[1300px] px-10 m-auto gap-10 grid grid-cols-[2.5fr,1fr]">
                <div className="mt-12 ">
                    <h4 className='text-2xl mb-10 text-primary font-bold'>Hire a security guard in Texas now 844-254-8273.</h4>
                    <div className='text-sm'>
                        <p className='leading-6 tracking-wide'>
                        Texas, a state situated in the Southern United States, stands as a beacon of diversity and vastness, boasting a population exceeding 29 million residents and covering approximately 268,596 square miles (695,662 km2) of expansive terrain. It ranks as the second most populous and second-largest state in the nation, characterized by a rich tapestry of cultures and landscapes. Bordered by Louisiana to the east, Arkansas to the northeast, Oklahoma to the north, New Mexico to the west, and the Mexican states of Chihuahua, Coahuila, Nuevo León, and Tamaulipas to the southwest, Texas encompasses diverse ecosystems ranging from coastal plains to arid deserts. Joint Power Service, a premier provider of security guard services, extends its unparalleled expertise throughout the Lone Star State, offering comprehensive security solutions to major cities including Houston, San Antonio, Dallas, Austin, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, and Laredo. With a commitment to safeguarding communities across Texas and beyond, Joint Power Service prides itself on its highly trained team of professionals, specializing in various security roles such as uniformed guards, event security personnel, armed security guards, executive protection specialists, and security technology consultants. With years of hands-on experience, Joint Power Service delivers top-notch services tailored to meet diverse security needs, whether it's ensuring safety at movie film sets, providing security for special events, trade shows, or businesses. Offering on-demand security services across Texas, including cities like Houston, San Antonio, Dallas, Austin, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, Laredo, Lubbock, Garland, Irving, Amarillo, and Grand Prairie, Joint Power Service remains dedicated to excellence. Contact Joint Power Service today for all your security concerns, and entrust your safety to our reliable and efficient solutions.                        </p>
                        <p className='my-5 leading-6 tracking-wide'>
                        In Texas, security is paramount, and numerous reputable security companies stand out. Texas Security Agency is a prominent name, offering top-notch services. Among the top security guard companies in Texas, their expertise ensures comprehensive protection. With a focus on safeguarding businesses and individuals, security companies in Texas play a vital role in maintaining public safety.
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
                        If you need security guard services in: <span className='font-medium text-secondary'> Dallas
Austin, Fort Worth, Dallas, Garland, Frisco, El Paso  or somewhere throughout Texas </span> then contact Joint Power Service today and put your fears to rest. We provide free consultations and will consider any security concerns or needs regardless of risk.
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.681137549222!2d-97.74292542519898!3d30.27466517480847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a014ac8dcf%3A0xcb6f5722a795d039!2sTexas%20Capitol!5e0!3m2!1sen!2sng!4v1708496272548!5m2!1sen!2sng" 
                                width="100%" 
                                height="400" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <h4 className='text-2xl my-10  mb-0 text-primary font-bold'>Now serving all Major cities in <b>Texas</b> .</h4>
                        <p className='leading-6 tracking-wide text-xs'>
                        Joint Power Service provides armed, unarmed, Firewatch and event staff security guards to all of Texas. We are also world famous for our Event and VIP Security Services.
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

export default SecurityGuardInTexas
