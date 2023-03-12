// GET /stores
export const getStores = (req, res) => {
  // retrieve all stores from the database
  const stores = req;

  // send the response
  res.status(200).json(stores);
};

// POST /stores
export const createStore = (req, res) => {
  // create a new store in the database
  const newStore = req;

  // send the response
  res.status(201).json(newStore);
};

// PATCH /stores/:id
export const updateStore = (req, res) => {
  const storeId = req.params.id;

  // update the store in the database
  const updatedStore = req;

  // send the response
  res.status(200).json(updatedStore);
};

// PUT /stores/:id
export const replaceStore = (req, res) => {
  const storeId = req.params.id;

  // replace thestore in the database
  const replacedStore = req;

  // send the response
  res.status(200).json(replacedStore);
};

// DELETE /stores/:id
export const deleteStore = (req, res) => {
  const storeId = req.params.id;

  // delete the store from the database
  req;

  // send the response
  res.status(204).send();
};

export default {
  getStores,
  createStore,
  updateStore,
  replaceStore,
  deleteStore
};
