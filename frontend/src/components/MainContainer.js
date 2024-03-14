import React, { useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";
import { useEmployees } from "../contexts/EmployeeProvider";

const MainContainer = () => {
  const { employees, setEmployees, avgsal, setAvgsal,dep,setDep } = useEmployees();

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [setEmployees, setAvgsal]);

  return (
    <div className="container d-flex flex-column justify-content-center">
      {dep.length !== 0 ? (
        <div className="text-center my-1">
          <h3><b>Employees of {dep} department</b></h3>
        </div>
      ) : (
        <div className="text-center my-1">
          <h3><b>Employees of all department</b></h3>
        </div>
      )}
      {avgsal > 0 && (
        <div className="text-center my-1">
          <h4>Average Salary: Rs. {avgsal}</h4>
        </div>
      )}
      <div className={`d-flex flex-wrap ${employees && employees.length > 0 ? 'justify-content-start' : 'justify-content-center'} gap-4 mt-5 `}>
        {employees && employees.length > 0 ? (
          employees.map((employee) => (
            <div
              className="d-flex flex-start"
              style={{
                paddingRight: "0px",
                paddingLeft: "0px",
                marginBottom: "20px",
              }}
              key={employee.id}
            >
              <EmployeeCard employee={employee} />
            </div>
          ))
        ) : (
          <div className="justify-content-center">
            <h2>No Employees Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
