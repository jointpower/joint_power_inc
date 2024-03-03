import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

  
const Description = () => (
    <>
        <p className='leading-6 tracking-wide'>
        Located in Orange County, California, Anaheim is a bustling city renowned for its diverse culture, rich history, and thriving urban environment. With a population exceeding 350,000 and covering around 50 square miles, Anaheim stands as a prominent hub in Southern California. Surrounded by cities like Los Angeles and Long Beach, Anaheim's economy flourishes through sectors such as tourism, healthcare, and technology.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains paramount in Anaheim, where the Anaheim Police Department (APD) takes center stage in ensuring safety and order. Known for their professionalism and community service, the APD works diligently to protect both residents and visitors. Through strategic enforcement and community outreach, the APD tackles various security issues, promoting peace and tranquility.
            </p>
            <p className='mb-5 leading-6 tracking-wide'> 
            Complementing law enforcement efforts, private firms like Anaheim Security Services also contribute significantly to enhancing safety. Offering tailored security solutions for businesses, residential areas, and events, Anaheim Security Services provides a range of services, including patrols and event management. Their skilled team effectively handles security challenges, safeguarding Anaheim's people and assets.
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)

const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Anaheim'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424219.4426378678!2d-118.4364205342094!3d33.83258121097686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd6f98055e867%3A0x1ab89ab9a2bb160!2sAnaheim%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709491564261!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
