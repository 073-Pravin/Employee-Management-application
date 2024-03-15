import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useEmployees } from "../contexts/EmployeeProvider";
import './../css/modalCss.css'
const UpdateModal = (props) => {
  const { employees, setEmployees, avgsal, setAvgsal } = useEmployees();
  const [employeestate, setEmployeestate] = useState({
    fullname: props.employee.fullname,
    age: props.employee.age,
    dob: props.employee.dob,
    salary: props.employee.salary,
    department: props.employee.department,
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      // Send request to update employee
      const response = await axios.put(
        `/api/employees/update/${props.employee.id}`,
        employeestate
      );
  
      // Update the list of employees in the local state
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === props.employee.id) {
          // Update the specific employee with the updated data
          return { ...employee, ...employeestate };
        }
        return employee;
      });
  
      // Update the employees state with the updated list
      setEmployees(updatedEmployees);
      setAvgsal(response.data.averageSalary);

      console.log(updatedEmployees);
  
      // Show success message
      toast.success("Employee updated successfully");
    } catch (error) {
      // Log and show error message if updating fails
      console.error("Error updating employee", error);
      toast.error("Failed to update employee");
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeestate({ ...employeestate, [name]: value });
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-primary mx-1"
          data-bs-toggle="modal"
          data-bs-target={`#updateemployee-${props.employee.id}`}
          data-bs-whatever="@fta"
        >
          Update
        </button>
        <div
          className="modal fade"
          id={`updateemployee-${props.employee.id}`}
          tabIndex={-1}
          aria-labelledby={`staticBackdropLabel-${props.employee.id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modalCss">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id={`staticBackdropLabel-${props.employee.id}`}
                >
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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor={`fullname-${props.employee.id}`}
                      className="col-form-label"
                    >
                      Full Name :
                    </label>
                    <input
                      type="text"
                      className="form-control modalInput"
                      name="fullname"
                      id={`fullname-${props.employee.id}`}
                      value={employeestate.fullname}
                      onChange={handleInputChange}
                      placeholder="Enter employee full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor={`age-${props.employee.id}`}
                      className="col-form-label"
                    >
                      Age :
                    </label>
                    <input
                      type="number"
                      className="form-control modalInput"
                      name="age"
                      id={`age-${props.employee.id}`}
                      value={employeestate.age}
                      onChange={handleInputChange}
                      placeholder="Enter employee age"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor={`dob-${props.employee.id}`}
                      className="col-form-label"
                    >
                      Date of Birth :
                    </label>
                    <input
                      type="date"
                      className="form-control modalInput"
                      name="dob"
                      id={`dob-${props.employee.id}`}
                      value={employeestate.dob}
                      onChange={handleInputChange}
                      placeholder="Enter employee date of birth"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor={`salary-${props.employee.id}`}
                      className="col-form-label"
                    >
                      Salary :
                    </label>
                    <input
                      type="number"
                      className="form-control modalInput"
                      name="salary"
                      id={`salary-${props.employee.id}`}
                      value={employeestate.salary}
                      onChange={handleInputChange}
                      placeholder="Enter employee salary"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor={`department-${props.employee.id}`}
                      className="col-form-label"
                    >
                      Department :
                    </label>
                    <input
                      type="text"
                      className="form-control modalInput"
                      name="department"
                      id={`department-${props.employee.id}`}
                      value={employeestate.department}
                      onChange={handleInputChange}
                      placeholder="Enter employee department"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
