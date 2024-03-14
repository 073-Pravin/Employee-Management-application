import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const LandingPage = ({children}) => {
  return (
    <div>
      <Navbar/>
        <main style={{ minHeight: "80vh" }} className='my-5'>{children}</main>
      <Footer/>
    </div>
  )
}

export default LandingPage
