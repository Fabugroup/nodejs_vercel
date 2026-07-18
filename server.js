const express = require("express");
const cors = require("cors");

const app = express();

// Temporary storage (Note: will reset frequently on Vercel serverless functions)
const employees = [];

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint for saving employee information (Removed the '.' before /api)
app.post("/employees", (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);

  console.log(newEmployee);

  res
    .status(201)
    .json({ success: true, message: "Employee added successfully" });
});

// API endpoint for retrieving all employee information (Removed the '.' before /api)
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Export instead of listen for Vercel
module.exports = app;