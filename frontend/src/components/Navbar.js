import React from "react";
import { Link } from "react-router-dom";
import AddModal from "./AddModal";
import { useState } from "react";
import axios from 'axios';
import { useEmployees } from "../contexts/EmployeeProvider";
const Navbar = () => {
  const [name,setName]=useState();
  const [employees,setEmployees] = useEmployees();
  const handleSearch =async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/employees/search/?name=${name}`);
      setEmployees(response.data.employees);
      console.log(response.data.employees);  
    } catch (error) {
      console.log("Error in fetching employee",error);
    }
  };

  const handleHome = async()=>{
    // const init = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employees");
        // console.log(response.data.employees);
        setEmployees(response.data.employees);
        // console.log(employees);
      } catch (error) {
        console.log("Error in fetching employee", error);
      }
    // };
    // init();
  }

  const handleDevelopment = async()=>{
    try {
      const Development = "Development";
      const response = await axios.get(`http://localhost:5000/api/employees/filter/?department=${Development}`);
      setEmployees(response.data.employees);
      console.log(response.data.employees);
    } catch (error) {
      console.log("Error in fetching employee",error);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="#">
            EMA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex flex-row">
              <li className="nav-item">
                <Link
                  className="nav-link active border border-black rounded-3"
                  aria-current="page"
                  to="#"
                  onClick={handleHome}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="#">
                Add new employee
                </Link> */}
                <AddModal />
              </li>
              <div className="dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter by department
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#" onClick={handleDevelopment}>
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Project management
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Human Resources
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Finance and Accounting
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="name"
                onChange={(e)=>setName(e.target.value)}
              />
              <button className="btn btn-outline-success" onClick={handleSearch}type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
