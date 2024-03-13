import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 


const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Santa Cruz'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101997.58757682281!2d-122.1951335367042!3d36.97579662983058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e441b7c36d549%3A0x52ca104b2ad7f985!2sSanta%20Cruz%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1709493754923!5m2!1sen!2sng"}
        />
  )
}

export default SecurityGuardInCalifornia
