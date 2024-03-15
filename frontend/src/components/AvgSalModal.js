import React from "react";
import { useEmployees } from "../contexts/EmployeeProvider";
import './../css/modalCss.css';
import { Link } from "react-router-dom";
const AvgSalModal = () => {
  const { avgsal, setAvgsal, dep, setDep } = useEmployees();

  // const handleAvgSalary =async ()=>{

  // }
  return (
    <div>
      <div>
        <Link
          type="button"
          className="nav-link active btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#avgsalmodal"
          data-bs-whatever="@mdo"
          // onClick={handleAvgSalary}
        >
          Get Average Salary of an employee
        </Link>
        <div
          className="modal fade"
          id="avgsalmodal"
          tabIndex={-1}
          aria-labelledby="avgsalmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content ">
              <div className="modal-header AvgSalmodalCss">
                <h3 className="modal-title " id="avgsalmodal">
                  Average salary 
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <h4 className="modal-body modalCss" id="avgsalmodal">
                Average salary: {avgsal}
              </h4>
              {/* <h4 className="modal-body modalCss" id="avgsalmodal">
                Average salary of development department : {avgsal}
              </h4>
              <h4 className="modal-body modalCss" id="avgsalmodal">
              Average salary of project management department : {avgsal}
              </h4>
              <h4 className="modal-body modalCss" id="avgsalmodal">
              Average salary of Marketing department : {avgsal}
              </h4>
              <h4 className="modal-body modalCss" id="avgsalmodal">
              Average salary of data analyst department : {avgsal}
              </h4> */}
              {/* <div className="modal-body">...</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvgSalModal;
