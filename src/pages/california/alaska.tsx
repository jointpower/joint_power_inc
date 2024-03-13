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
        name={'Alaska'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16503087.12745808!2d-179.4809636!3d59.6739924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5400df9cc0aec01b%3A0xbcdb5e27a98adb35!2sAlaska%2C%20USA!5e0!3m2!1sen!2sng!4v1709457246013!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
