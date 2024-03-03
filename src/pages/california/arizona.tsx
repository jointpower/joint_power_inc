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
             Arizona, a dynamic state situated in the southwestern region of the United States, boasts a sizable population of over 7 million residents sprawled across approximately 113,990 square miles (295,234 km2), making it a significant hub in the region. Surrounded by notable cities such as Phoenix, Tucson, and Flagstaff, Arizona thrives on its diverse cultural landscape and robust economic vitality.
            </p>
            <p className='my-5 leading-6 tracking-wide'>
            Security remains a paramount concern throughout Arizona, where the Arizona Security Agency emerges as a leading provider. Esteemed for their professionalism and proficiency, they specialize in delivering tailored security solutions designed to meet the needs of businesses and individuals alike, ensuring comprehensive protection. Their skilled personnel adeptly handle a variety of security challenges, ranging from bustling urban areas to serene rural communities, thus fostering a sense of safety and peace of mind.
            </p>
            <p className='leading-6 tracking-wide'>
            Joint Power services provide business owners, event promoters, managers, and private customers with integrated solutions designed to quickly, efficiently, and effectively address any security concerns. We can even provide celebrity bodyguards and red-carpet security. The modern world is a frightening place with evolving dangers that pose extremely dangerous security concerns. Joint Power Service will address these concerns with customized solutions designed by specialists that represent the best and most up-to-date talent and technology that can be found in the industry, let alone on the West Coast. Joint Power services provide innovative solutions such as:
        </p>
    </>
)

const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Arizona'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6769848.333926999!2d-117.223018165498!3d34.054386675563286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08ebcb4c186b%3A0x423927b17fc1cd71!2sArizona%2C%20USA!5e0!3m2!1sen!2sng!4v1709457666732!5m2!1sen!2sng"}
        Description={Description}
        />
  )
}

export default SecurityGuardInCalifornia
