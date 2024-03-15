import React from "react";
import { Link } from "react-router-dom";
import AddModal from "./AddModal";
import { useState } from "react";
import axios from "axios";
import { useEmployees } from "../contexts/EmployeeProvider";
import AvgSalModal from "./AvgSalModal";
import "./../css/navbar.css";
const Navbar = () => {
  const [name, setName] = useState();
  const { employees, setEmployees, avgsal, setAvgsal, dep, setDep } =
    useEmployees();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/employees/search/?name=${name}`
      );
      setEmployees(response.data.employees);
      setAvgsal(0);
    } catch (error) {
      console.log("Error in fetching employee", error);
    }
  };

  const handleHome = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/employees`
      );

      setEmployees(response.data.employees);
      setAvgsal(response.data.averageSalary);
    } catch (error) {
      console.log("Error in fetching employee", error);
    }
  };

  const handleFilter = async (e) => {
    try {
      const Department = e.target.name;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/employees/filter/?department=${Department}`
      );
      setEmployees(response.data.employees);
      setDep(e.target.name);
      setAvgsal(response.data.averageSalary);
    } catch (error) {
      console.log("Error in fetching employee", error);
    }
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container-fluid gap-5">
          <Link className="navbar-brand logo" to="#" onClick={handleHome}>
            EMA
          </Link>
          {/* <img src="/assets/logo.png" alt="Logo" className="navbar-brand logo" /> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon menuToggler"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  m-3 mt-0 mb-0 mb-lg-0 flex flex-row gap-4 navUl">
              <li className="nav-item">
                <Link
                  className="nav-link active btn btn-dark"
                  aria-current="page"
                  to="#"
                  onClick={handleHome}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <AddModal />
              </li>
              <div className="dropdown">
                <Link
                  className="nav-link active dropdown-toggle btn btn-dark"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter by department
                </Link>
                <ul className="dropdown-menu cusDropdown">
                  <li>
                    <Link
                      className="dropdown-item cusDropdownItem"
                      to="#"
                      onClick={handleFilter}
                      name="development"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item cusDropdownItem"
                      to="#"
                      onClick={handleFilter}
                      name="project management"
                    >
                      Project management
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item cusDropdownItem"
                      to="#"
                      onClick={handleFilter}
                      name="human resources"
                    >
                      Human Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item cusDropdownItem"
                      to="#"
                      onClick={handleFilter}
                      name="data analytics"
                    >
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item cusDropdownItem"
                      to="#"
                      onClick={handleFilter}
                      name="finance and accounting"
                    >
                      Finance and Accounting
                    </Link>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <AvgSalModal />
              </li>
            </ul>
                <form className="d-flex m-3 flex justify-content-end " role="search">
                  <input
                    className=" me-2 navSearchInput"
                    type="search"
                    placeholder="Search"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <button
                    className="btn navBtn"
                    onClick={handleSearch}
                    type="submit"
                  >
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
