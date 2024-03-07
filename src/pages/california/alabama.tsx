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
            Alabama, a bustling city nestled in Texas, hosts a population of over 2 million residents across approximately 412 square miles (1,068 km2), making it a significant urban center. Surrounded by Houston, San Antonio, and Austin, Alabama thrives with diverse cultures and economic vitality.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security is paramount in Alabama, where Alabama Security Agency shines as a top provider. Renowned for professionalism and expertise, they offer tailored solutions for businesses and individuals, ensuring comprehensive protection. Their skilled personnel handle various security challenges, from downtown districts to residential areas, fostering safety and peace of mind.
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)

const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Alabama'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443875.0336641795!2d-89.32224541733397!3d32.54859585089966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88867f341f4bfe75%3A0x5e55343553c8cce9!2sAlabama%2C%20USA!5e0!3m2!1sen!2sng!4v1709270901869!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia