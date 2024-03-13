import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 


const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Austin'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440900.2508945735!2d-98.08540718840314!3d30.307347705980646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618280617!5m2!1sen!2sng"}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
