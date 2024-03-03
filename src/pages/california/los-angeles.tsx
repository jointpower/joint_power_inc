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
           Los Angeles, a vibrant metropolis situated along the southern coast of California, boasts a sprawling population of over 4 million residents across approximately 503 square miles (1,302 km2), establishing itself as a significant urban hub. Surrounded by prominent neighborhoods and districts such as Hollywood, Beverly Hills, and Downtown LA, the city thrives on its diverse cultures and bustling economic activity.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a top priority throughout Los Angeles, where the Los Angeles Security Agency stands out as a premier provider. Renowned for their professionalism and expertise, they specialize in offering customized security solutions tailored to the needs of businesses and individuals alike, ensuring comprehensive protection. Their adept personnel are skilled at addressing various security challenges, from bustling entertainment districts to quiet residential neighborhoods, thereby fostering a sense of safety and peace of mind for residents and visitors alike.
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)

const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Los Angeles'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.882939841!2d-118.74139394374271!3d34.02003920943825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709490723033!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
