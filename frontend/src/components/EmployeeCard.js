import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";
import axios from "axios";
import { useEmployees } from "../contexts/EmployeeProvider";
import {toast} from "react-hot-toast";


const EmployeeCard = (props) => {
  const [employees, setEmployees] = useEmployees();
  const [employeestate, setEmployeestate] = useState(props.employee);
  const [formdata,setFormdata]=useState(props.employee);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/employees/delete/${employeestate.id}`
      );
      setEmployees(response.data.employees);
    } catch (error) {
      console.log("Error in deleting an employee", error);
    }
  };


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d57783e-0e78-42a6-94c1-55f0d00e9293/dfphv8z-39a0c4d3-8626-416e-a771-bb9b98b30ef4.jpg/v1/fill/w_1280,h_913,q_75,strp/morgan_freeman_by_jjkiefer_dfphv8z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTEzIiwicGF0aCI6IlwvZlwvM2Q1Nzc4M2UtMGU3OC00MmE2LTk0YzEtNTVmMGQwMGU5MjkzXC9kZnBodjh6LTM5YTBjNGQzLTg2MjYtNDE2ZS1hNzcxLWJiOWI5OGIzMGVmNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TTfxmeIF039lLNTWthjJmFHVA3-DsR_arGSEmItDNOA"
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body ">
          <h5 className="card-title ">{employeestate.fullname}</h5>
          <p className="card-text">Age : {employeestate.age}</p>
          <p className="card-text">DOB : {employeestate.dob}</p>
          <p className="card-text">Salary : {employeestate.salary}</p>
          <p className="card-text">Department : {employeestate.department}</p>
          <div className="d-flex flex-row justify-content-end">
            <Link to="#" className="btn btn-danger mx-1" onClick={handleDelete}>
              Delete
            </Link>
            {/* <Link to="#" className="btn btn-primary mx-1">
              Update
            </Link> */}
            <UpdateModal employee={employeestate}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmployeeCard;
