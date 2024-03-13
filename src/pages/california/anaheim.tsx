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
        name={'Anaheim'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424219.4426378678!2d-118.4364205342094!3d33.83258121097686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd6f98055e867%3A0x1ab89ab9a2bb160!2sAnaheim%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709491564261!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
