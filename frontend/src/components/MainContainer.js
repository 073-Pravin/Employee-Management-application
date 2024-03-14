import React, { useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";
import {useEmployees} from "../contexts/EmployeeProvider"
const MainContainer = () => {
  const [employees, setEmployees] = useEmployees();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employees");
        // console.log(response.data.employees);
        setEmployees(response.data.employees);
        // console.log(employees);
      } catch (error) {
        console.log("Error in fetching employee", error);
      }
    };
    init();
  }, [setEmployees]);
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {employees.length > 0 ? (
          employees?.map((employee) => {
            return (
              <div
                className="d-flex flex-start"
                style={{
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  marginBottom: "20px",
                }}
                key={employee.id}
              >
                <EmployeeCard
                  employee={employee}
                />
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <h2>No Employees Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
