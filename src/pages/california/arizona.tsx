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
        name={'Arizona'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6769848.333926999!2d-117.223018165498!3d34.054386675563286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08ebcb4c186b%3A0x423927b17fc1cd71!2sArizona%2C%20USA!5e0!3m2!1sen!2sng!4v1709457666732!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
