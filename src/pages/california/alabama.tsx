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
        name={'Alabama'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443875.0336641795!2d-89.32224541733397!3d32.54859585089966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88867f341f4bfe75%3A0x5e55343553c8cce9!2sAlabama%2C%20USA!5e0!3m2!1sen!2sng!4v1709270901869!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
