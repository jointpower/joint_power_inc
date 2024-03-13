import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 



const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Arlington'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214874.23064364571!2d-97.30022614137545!3d32.70173523183762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62d2e40898d3%3A0xb5ef6ac1fa05351!2sArlington%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618634786!5m2!1sen!2sng"}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
