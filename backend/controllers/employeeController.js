import fs from "fs";
import uniqid from "uniqid";
// fuction for loading the movies from employee.json file
const loadEmployees = async () => {
  try {
    const dataBuffer = fs.readFileSync("./employees.json", "utf-8");
    return await JSON.parse(dataBuffer);
  } catch (error) {
    console.log("Error in loading the employees", error.message);
    return [];
  }
};

// function for storing the employees in the employee.json file
const saveEmployees = (newEmployees) => {
  try {
    const dataJSON = JSON.stringify(newEmployees,null,2);
    fs.writeFileSync("./employees.json", dataJSON);
  } catch (error) {
    console.log("Error in saving the employees", error.message);
  }
};

//controller for getting all employees
export const getAllEmployeeController = async (req, res) => {
  try {
    let employees = await loadEmployees();
    res.status(200).json({ success: true, employees });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in getting all employees",
      error: error.message,
    });
  }
};

// Function to add an employee to the employees array and then store it into the json file
export const addEmployeeController = async (req, res) => {
  try {
    let employees = await loadEmployees();
    let newEmployees = req.body;
    let employeeId= uniqid();
    newEmployees = { id: employeeId, ...newEmployees };
    employees.push(newEmployees);
    saveEmployees(employees);
    res
      .status(201)
      .json({
        success: true,
        message: "Employee added successfully",
        employees,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in adding a new employee",
      error: error.message,
    });
  }
};

//controller for filtering employees
export const filterEmployeeController =async(req,res)=>{
    try {
        const {department} = req.query;
        let employees = await loadEmployees();
        const filteredEmployees = employees.filter(employee=>employee.department === department);
       if(!filteredEmployees.length){
           res.status(404).json({success:false,message:"No employee found"});
       }else{
           res.status(200).json({success:true,employees:filteredEmployees});
       }
    } catch (error) {
        res.status(500).json({success:false,message:"Error in filtering the employees",error:error.message});
    }
}

//controller for searching employees by name
export const searchEmployeeController = async (req, res) => {
  try {
    const { name } = req.query;
    let employees = await loadEmployees();
    const searchedEmployees = employees.filter((employee) =>
      employee.fullname.toLowerCase().includes(name.toString().toLowerCase())
    );
    if (!searchedEmployees.length) {
      res.status(404).json({ success: false, message: "No employee found" });
    } else {
      res.status(200).json({ success: true, employees: searchedEmployees });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in searching the employees",
      error: error.message,
    });
  }
};

//controller for update an employee
export const updateEmployeeController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = req.body;
    let employees = await loadEmployees();
    const employee = employees.find((employee) => employee.id === id.toString());
    if (employee) {
      const index = employees.indexOf(employee);
      employees[index] = { ...employee, ...updatedEmployee };
      saveEmployees(employees);
      res
        .status(200)
        .json({
          success: true,
          message: "Employee updated successfully",
          employees,
        });
    } else {
      res.status(404).json({ success: false, message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in updating an employee",
      error: error.message,
    });
  }
};

//controller for deleting an employee
export const deleteEmployeeController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let employees = await loadEmployees();
    const index = employees.findIndex((employee) => employee.id === id.toString());
    if (index !== -1 && index < employees.length) {
      employees.splice(index, 1);
      saveEmployees(employees);
      res
        .status(200)
        .json({
          success: true,
          message: "Employee deleted successfully",
          employees,
        });
    } else {
      res.status(404).json({ success: false, message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in deleting an employee",
      error: error.message,
    });
  }
};


