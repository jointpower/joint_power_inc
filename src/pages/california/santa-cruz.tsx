import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 

 
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
            Located along the scenic coast of California, Santa Cruz is a vibrant city renowned for its stunning beaches, laid-back atmosphere, and diverse community. With a population of over 65,000 residents and spanning approximately 15.6 square miles, Santa Cruz holds a special place within the Central Coast region. Surrounded by picturesque landscapes and neighboring cities such as Capitola and Scotts Valley, Santa Cruz thrives on its unique blend of tourism, education, and technology-driven economy.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Maintaining security is a top priority in Santa Cruz, where the Santa Cruz Police Department (SCPD) plays a pivotal role in upholding law and order. Respected for their professionalism and commitment to public safety, the SCPD diligently works to safeguard the well-being of both residents and visitors. Through proactive policing strategies and community partnerships, the SCPD addresses various security challenges, promoting a sense of safety and tranquility throughout the city.
            <p className='my-5 leading-6 tracking-wide'>
            Complementing law enforcement efforts, private security firms like Santa Cruz Security Services also contribute significantly to bolstering security within the city. Specializing in providing tailored security solutions for businesses, residential neighborhoods, and special events, Santa Cruz Security Services offers a comprehensive range of services, including surveillance, access control, and security patrols. With a team of highly trained professionals at their disposal, Santa Cruz Security Services stands ready to address any security concerns with utmost professionalism and efficiency, thereby ensuring the protection of Santa Cruz's populace, assets, and infrastructure.
            </p>
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)


const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Santa Cruz'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101997.58757682281!2d-122.1951335367042!3d36.97579662983058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e441b7c36d549%3A0x52ca104b2ad7f985!2sSanta%20Cruz%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493754923!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
