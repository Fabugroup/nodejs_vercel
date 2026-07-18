const express = require('express');
const cors = require('cors');

const app = express();

// Temporsry storage of employees
const employees = []

// Middle 
app.use(cors());
app.use(express.json());

// API end point for savin employee instruction
app.post("/employee", (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    
    console.log(newEmployee);

    res
        .status(201)
        .json({ success: true, message: "Employee added successfully" });
});

// adding end point for retrieving all employee information
app.get('/employee', (req, res) => {
    res.json(employees);
    
})
    
// export instead of listen
module export = app;