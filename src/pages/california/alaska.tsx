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
            Nestled amidst the rugged beauty of the Last Frontier, Alaska stands as a bustling urban center, home to over 2 million residents spread across approximately 412 square miles (1,068 km2). Anchorage, surrounded by majestic wilderness and neighboring cities like Fairbanks, Juneau, and Sitka, thrives with a rich tapestry of cultures and economic vibrancy.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            In Alaska, security is of utmost importance, and the Alaska Security Agency stands out as a premier provider. Renowned for their professionalism and expertise, they offer tailored security solutions for both businesses and individuals, ensuring comprehensive protection in the face of diverse challenges. From safeguarding bustling downtown areas to remote residential communities, their skilled personnel ensure safety and peace of mind for all.
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)

const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Alaska'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16503087.12745808!2d-179.4809636!3d59.6739924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5400df9cc0aec01b%3A0xbcdb5e27a98adb35!2sAlaska%2C%20USA!5e0!3m2!1sen!2sng!4v1709457246013!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
