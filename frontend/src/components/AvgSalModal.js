import React from "react";

const AvgSalModal = () => {
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#avgsalmodal"
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
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="avgsalmodal">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvgSalModal;
