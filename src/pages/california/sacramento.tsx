import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 

 

const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Sacramento'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.65307277394!2d-121.62624174124278!3d38.56161840982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493388433!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
