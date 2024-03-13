import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 

const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Dallas'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429176.9100843101!2d-97.06121509403876!3d32.820232566642844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618112110!5m2!1sen!2sng"}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
