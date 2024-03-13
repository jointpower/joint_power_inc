import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 
 
const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'Houston'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.692768865!2d-95.73095659905265!3d29.816768799867795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709617858349!5m2!1sen!2sng"}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
