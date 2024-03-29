import express from "express";
import {
    getAllEmployeeController,
    addEmployeeController,
    searchEmployeeController,
    filterEmployeeController,
    updateEmployeeController,
    deleteEmployeeController
} from '../controllers/employeeController.js'

const  router = express.Router();


// route for getting all employees
router.get('/employees',getAllEmployeeController);

// route for adding new an employee
router.post('/employees/add',addEmployeeController);

//route for filter the employees
router.get('/employees/filter',filterEmployeeController);

// route for searching the employees based on the name
router.get('/employees/search',searchEmployeeController);

// route for update an employee record
router.put('/employees/update/:id',updateEmployeeController);

// route for deleting an employee
router.delete('/employees/delete/:id',deleteEmployeeController);

export default router;