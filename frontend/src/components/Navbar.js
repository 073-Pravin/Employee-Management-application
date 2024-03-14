import React from "react";
import { Link } from "react-router-dom";
import AddModal from "./AddModal";
import { useState } from "react";
import axios from "axios";
import { useEmployees } from "../contexts/EmployeeProvider";
import AvgSalModal from "./AvgSalModal";
const Navbar = () => {
  const [name, setName] = useState();
  const { employees, setEmployees, avgsal, setAvgsal ,dep,setDep} = useEmployees();

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
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="#" onClick={handleHome}>
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
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleFilter}
                      name="development"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleFilter}
                      name="project management"
                    >
                      Project management
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleFilter}
                      name="human resources"
                    >
                      Human Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleFilter}
                      name="data analytics"
                    >
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleFilter}
                      name="finance and accounting"
                    >
                      Finance and Accounting
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <li className="nav-item">
                <AvgSalModal />
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button
                className="btn btn-outline-success"
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
