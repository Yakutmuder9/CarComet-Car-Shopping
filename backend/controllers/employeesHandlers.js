// GET /employees
const getEmployees = (req, res) => {
  // retrieve all employees from the database
  const employees = req.body;

  // send the response
  res.status(200).json(employees);
};

// POST /employees
const createEmployee = (req, res) => {
  // create a new employee in the database
  const newEmployee = req.body;

  // send the response
  res.status(201).json(newEmployee);
};

// PATCH /employees/:id
const updateEmployee = (req, res) => {
  const employeeId = req.params.id;

  // update the employee in the database
  const updatedEmployee = req.body;

  // send the response
  res.status(200).json(updatedEmployee);
};

// PUT /employees/:id
const replaceEmployee = (req, res) => {
  const employeeId = req.params.id;

  // replace the employee in the database
  const replacedEmployee = req.body;

  // send the response
  res.status(200).json(replacedEmployee);
};

// DELETE /employees/:id
const deleteEmployee = (req, res) => {
  const employeeId = req.params.id;

  // delete the employee from the database
  req.body;

  // send the response
  res.status(204).send();
};

export default {
  getEmployees,
  createEmployee,
  updateEmployee,
  replaceEmployee,
  deleteEmployee,
};
