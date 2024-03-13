import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 

const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Fort Worth'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429272.7882295859!2d-97.61898151196158!3d32.80038110222982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618452537!5m2!1sen!2sng"}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
