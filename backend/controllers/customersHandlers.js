// GET /customers
const getCustomers = (req, res) => {
  // retrieve all customers from the database
  const customers = req.body;

  // send the response
  res.status(200).json(customers);
};

// POST /customers
const createCustomer = (req, res) => {
  // create a new customer in the database
  const newCustomer = req.body;

  // send the response
  res.status(201).json(newCustomer);
};

// PATCH /customers/:id
const updateCustomer = (req, res) => {
  const customerId = req.params.id;

  // update the customer in the database
  const updatedCustomer = req.body;

  // send the response
  res.status(200).json(updatedCustomer);
};

// PUT /customers/:id
const replaceCustomer = (req, res) => {
  const customerId = req.params.id;

  // replace the customer in the database
  const replacedCustomer = req.body;

  // send the response
  res.status(200).json(replacedCustomer);
};

// DELETE /customers/:id
const deleteCustomer = (req, res) => {
  const customerId = req.params.id;

  // delete the customer from the database
  req.body;

  // send the response
  res.status(204).send();
};

export default {
  getCustomers,
  createCustomer,
  updateCustomer,
  replaceCustomer,
  deleteCustomer,
};
