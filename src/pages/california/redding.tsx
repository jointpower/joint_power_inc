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
        name={'Redding'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193953.81530573414!2d-122.52583083531712!3d40.5740913415914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d291d63b4a202f%3A0x1f3358ec7b360f57!2sRedding%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492792086!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
