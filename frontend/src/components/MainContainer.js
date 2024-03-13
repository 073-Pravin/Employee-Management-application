import React, {useState } from 'react'
import EmployeeCard from './EmployeeCard'
const MainContainer = () => {
    const [employee,setEmployee]=useState([]);

  return (
    <>
      <EmployeeCard/>
    </>
  )
}

export default MainContainer
