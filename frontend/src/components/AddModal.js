import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useEmployees } from "../contexts/EmployeeProvider";
import "././../css/addmodal.css"
import "././../css/navbar.css"
import "././../css/modalCss.css"
const AddModal = () => {
  const { employees, setEmployees, avgsal, setAvgsal } = useEmployees();
  const [newemployee, setNewemployee] = useState({
    fullname: "",
    age: "",
    dob: "",
    salary: "",
    department: "",
  });
  // console.log(employees);
  const handleSubmit = async () => {
    try {
      if (newemployee.fullname === "") {
        toast.error("Please enter full name");
        return;
      }
      if (newemployee.age === "" || newemployee.age < 0) {
        toast.error("Please enter a valid age");
        return;
      }
      if (newemployee.dob === "") {
        toast.error("Please enter date of birth");
        return;
      }
      if (newemployee.salary === "" || newemployee.salary < 0) {
        toast.error("Please enter a valid salary");
        return;
      }
      if (newemployee.department === "") {
        toast.error("Please enter department");
        return;
      }
      const response = await axios.post(`/api/employees/add`, newemployee);
      console.log(response);
      setEmployees([...employees, response.data.newEmployees]);
      setAvgsal(response.data.averageSalary);
      toast.success("Employee added successfully");
      setNewemployee({
        fullname: "",
        age: "",
        dob: "",
        salary: "",
        department: "",
      });
    } catch (error) {
      console.log("Erro in adding new employee", error);
    }
  };

  const handleClose =()=>{
    try {
      setNewemployee({
        fullname: "",
        age: "",
        dob: "",
        salary: "",
        department: "",
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    if(name && value) {
      setNewemployee({ ...newemployee, [name]: value });
    }
  };

  return (
    <div>
      <div>
        <Link
          className="nav-link active btn btn-dark"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#addmodal"
          data-bs-whatever="@mdo"
        >
          Add new employee
        </Link>
        <div
          className="modal fade cusModal"
          id="addmodal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modalCss">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Enter details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="col-form-label">
                      Full Name :
                    </label>
                    <input
                      type="text"
                      className="form-control modalInput"
                      name="fullname"
                      value={newemployee.fullname}
                      onChange={handleInputChange}
                      placeholder="Enter employee full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className="col-form-label">
                      Age :
                    </label>
                    <input
                      type="number"
                      className="form-control modalInput"
                      name="age"
                      value={newemployee.age}
                      onChange={handleInputChange}
                      placeholder="Enter employee age"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date-of-birth" className="col-form-label">
                      Date of Birth :
                    </label>
                    <input
                      type="date"
                      className="form-control modalInput"
                      name="dob"
                      value={newemployee.dob}
                      onChange={handleInputChange}
                      placeholder="Enter employee date of birth"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="salary" className="col-form-label">
                      Salary :
                    </label>
                    <input
                      type="number"
                      className="form-control modalInput"
                      name="salary"
                      value={newemployee.salary}
                      onChange={handleInputChange}
                      placeholder="Enter employee salary"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="department" className="col-form-label">
                      Department :
                    </label>
                    <input
                      type="text"
                      className="form-control modalInput"
                      name="department"
                      value={newemployee.department}
                      onChange={handleInputChange}
                      placeholder="Enter employee department"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary navBtn"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary navBtn"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
