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
        name={'Los Angeles'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.882939841!2d-118.74139394374271!3d34.02003920943825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709490723033!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
