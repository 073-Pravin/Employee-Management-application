import React from 'react'
import {useState,createContext,useContext} from "react";

const EmployeeContext = createContext();
// const AvgSal =createContext();

const EmployeeProvider = ({children}) => {
  const [employees,setEmployees]= useState([]);
  const [avgsal,setAvgsal] = useState(null); 
  const [dep,setDep]=useState('');
  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, avgsal, setAvgsal,dep,setDep }}> 
      {children}
    </EmployeeContext.Provider>
  )
}
const useEmployees = ()=> useContext(EmployeeContext);
export  {EmployeeProvider, useEmployees};
