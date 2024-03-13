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
        name={'Carlsbad'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106928.8938270301!2d-117.37020397725605!3d33.121492433202995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73453f3bee59%3A0xa4cb5592fcf65d2f!2sCarlsbad%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709491806203!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
