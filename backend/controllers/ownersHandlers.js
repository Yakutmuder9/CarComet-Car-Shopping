// GET /owners
const getOwners = (req, res) => {
  // retrieve all owners from the database
  const owners = req;

  // send the response
  res.status(200).json(owners);
};

// POST /owners
const createOwner = (req, res) => {
  // create a new owner in the database
  const newOwner = req;

  // send the response
  res.status(201).json(newOwner);
};

// PATCH /owners/:id
const updateOwner = (req, res) => {
  const ownerId = req.params.id;

  // update the owner in the database
  const updatedOwner = req;

  // send the response
  res.status(200).json(updatedOwner);
};

// PUT /owners/:id
const replaceOwner = (req, res) => {
  const ownerId = req.params.id;

  // replace the owner in the database
  const replacedOwner = req;

  // send the response
  res.status(200).json(replacedOwner);
};

// DELETE /owners/:id
const deleteOwner = (req, res) => {
  const ownerId = req.params.id;

  // delete the owner from the database

  // send the response
  res.status(204).send();
};

export default {
  getOwners,
  createOwner,
  updateOwner,
  replaceOwner,
  deleteOwner,
};
