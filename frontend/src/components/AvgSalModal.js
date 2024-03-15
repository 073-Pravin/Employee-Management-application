import React from "react";
import { useEmployees } from "../contexts/EmployeeProvider";
import './../css/modalCss.css';
const AvgSalModal = () => {
  const { avgsal, setAvgsal, dep, setDep } = useEmployees();

  // const handleAvgSalary =async ()=>{

  // }
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#avgsalmodal"
          // onClick={handleAvgSalary}
        >
          Get Average Salary of an employee
        </button>
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
