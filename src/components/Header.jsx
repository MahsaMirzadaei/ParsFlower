import React from 'react'
import { BackgroundSection } from '../styles/Header'
import Logo from '../img/mainlogo.png'

const Header = () => {
  return (
    <>
      <BackgroundSection>
        <img src={Logo} alt="logo" />
      </BackgroundSection>
    </>
  )
}

export default Header