const express = require("express");
const cors = require("cors");

const app = express();

// Temporary storage of employees
const employees = [];

//Middleware
app.use(cors());
app.use(express.json());

// API end point for saving  employee information
app.post("/employees", (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);

  console.log(newEmployee);

  res
    .status(201)
    .json({ success: true, message: "Employee added successfully" });
});

// adding end point for retrieving all employee information
app.get("/employees", (req, res) => {
  res.json(employees);
});

//export instead of listen
module.exports = app;