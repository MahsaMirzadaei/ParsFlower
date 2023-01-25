import React from 'react'
import { useTheme } from '@mui/system'
import Navbar from "../components/Navbar";
import CategoriesSlides from '../components/CategoriesSlides'
import Consult from '../components/Consult'
import Footer from '../components/Footer'
import Header from '../components/Header'
import New from '../components/New'

const Home = () => {
  const theme = useTheme()
  return (
    <>
      <Navbar fixBg = "rgba(255, 0, 0, 0)" stickBg = {theme.tiffanyBlue} />
      <Header/>
      <New title = "new"/>
      <CategoriesSlides/>
      <Consult/>
      <New title = "Bestseller"/>
      <Footer/>
    </>
  )
}

export default Home