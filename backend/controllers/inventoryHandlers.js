// GET /inventory
const getInventory = (req, res) => {
  // retrieve all inventory items from the database
  const inventory = req;

  // send the response
  res.status(200).json(inventory);
};

// POST /inventory
const createInventoryItem = (req, res) => {
  // create a new inventory item in the database
  const newInventoryItem = req;

  // send the response
  res.status(201).json(newInventoryItem);
};

// PATCH /inventory/:id
const updateInventoryItem = (req, res) => {
  const inventoryItemId = req.params.id;

  // update the inventory item in the database
  const updatedInventoryItem = req;

  // send the response
  res.status(200).json(updatedInventoryItem);
};

// PUT /inventory/:id
const replaceInventoryItem = (req, res) => {
  const inventoryItemId = req.params.id;

  // replace the inventory item in the database
  const replacedInventoryItem = req;

  // send the response
  res.status(200).json(replacedInventoryItem);
};

// DELETE /inventory/:id
const deleteInventoryItem = (req, res) => {
  const inventoryItemId = req.params.id;

  // delete the inventory item from the database
  req;

  // send the response
  res.status(204).send();
};

export default {
  getInventory,
  createInventoryItem,
  updateInventoryItem,
  replaceInventoryItem,
  deleteInventoryItem,
};
