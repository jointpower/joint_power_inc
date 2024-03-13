import InputText from '@/components/atom/InputText/InputText'
import Banner from '@/components/molecules/Banner/Banner'
import CityLayout from '@/components/pages/CityLayout'
import Layout from '@/components/templates/Layout/AppLayout'
import Link from 'next/link'
import React from 'react' 


const SecurityGuardInCalifornia = () => {
  return (
    <CityLayout 
        name={'El Paso'}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433987.11815502855!2d-106.75418084370594!3d31.810710423313893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e73f8bc5fe3b69%3A0xe39184e3ab9d0222!2sEl%20Paso%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1709618798939!5m2!1sen!2sng"}
        state={'Texas'}
        />
  )
}

export default SecurityGuardInCalifornia
