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
        name={'Fresno'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204504.36988514187!2d-119.95937362020697!3d36.785419767807234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709492160150!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
