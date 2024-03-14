import React from 'react'
import {useState,createContext,useContext} from "react";

const EmployeeContext = createContext();


const EmployeeProvider = ({children}) => {
  const [employees,setEmployees]= useState([]);
  return (
    <EmployeeContext.Provider value={[employees,setEmployees]}>
      {children}
    </EmployeeContext.Provider>
  )
}
const useEmployees = ()=> useContext(EmployeeContext);
export  {EmployeeProvider, useEmployees};
