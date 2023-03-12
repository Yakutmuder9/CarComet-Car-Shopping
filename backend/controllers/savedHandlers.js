// GET /saved
const getSavedCars = (req, res) => {
  // retrieve all saved cars for the authenticated user from the database
  const savedCars = req;

  // send the response
  res.status(200).json(savedCars);
};

// POST /saved
const saveCar = (req, res) => {
  // retrieve the car and authenticated user from the request body
  const car = req;
  const user = req;

  // save the car for the authenticated user in the database
  req;

  // send the response
  res.status(201).send();
};

// PATCH /owners/:id
const updateSavedCar = (req, res) => {
  const ownerId = req.params.id;

  // update the owner in the database
  const updatedOwner = req;

  // send the response
  res.status(200).json(updatedOwner);
};

// PUT /owners/:id
const replaceSavedCar = (req, res) => {
  const ownerId = req.params.id;

  // replace the owner in the database
  const replacedOwner = req;

  // send the response
  res.status(200).json(replacedOwner);
};

// DELETE /saved/:id
const unsaveCar = (req, res) => {
  const savedCarId = req.params.id;

  // delete the saved car from the database
  req;

  // send the response
  res.status(204).send();
};
export default { getSavedCars, saveCar, updateSavedCar, replaceSavedCar, unsaveCar };
