import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaArrowRight, FaCaretRight } from 'react-icons/fa' 

 


const SecurityGuardInCalifornia = () => {

  return (
    <CityLayout 
        name={'Bakersfield'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208345.50899325017!2d-119.18349946115573!3d35.32092262873064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6bc8b994cb0d%3A0x59360c0998fe74c8!2sBakersfield%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493087203!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
