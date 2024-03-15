import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './../css/landingpage.css'
const LandingPage = ({children}) => {
  return (
    <div>
      <Navbar/>
        <main style={{ minHeight: "80vh",width:"100%", marginTop:"62px"}} className='LandingPage'>{children}</main>
      {/* <Footer/> */}
    </div>
  )
}

export default LandingPage
