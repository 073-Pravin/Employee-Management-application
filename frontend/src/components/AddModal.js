import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useEmployees } from "../contexts/EmployeeProvider";
const AddModal = () => {
  const [employees, setEmployees] = useEmployees();
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
      const response = await axios.post("http://localhost:5000/api/employees/add", newemployee);
      console.log(response);
      setEmployees([...employees, response.data.newEmployees]);
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

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setNewemployee({ ...newemployee, [name]: value });
  };

  return (
    <div>
      <div>
        <Link
          className="nav-link active"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#addmodal"
          data-bs-whatever="@mdo"
        >
          Add new employee
        </Link>
        <div
          className="modal fade"
          id="addmodal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
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
                      className="form-control"
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
                      className="form-control"
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
                      className="form-control"
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
                      className="form-control"
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
                      className="form-control"
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
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
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