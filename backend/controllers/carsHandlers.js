// GET /cars
const getCars = (req, res) => {
  // retrieve all cars from the database
  const cars = req;

  // send the response
  res.status(200).json(cars);
};

// POST /cars
const createCar = (req, res) => {
  // create a new car in the database
  const newCar = req;

  // send the response
  res.status(201).json(newCar);
};

// PATCH /cars/:id
const updateCar = (req, res) => {
  const carId = req.params.id;

  // update the car in the database
  const updatedCar = req;

  // send the response
  res.status(200).json(updatedCar);
};

// PUT /cars/:id
const replaceCar = (req, res) => {
  const carId = req.params.id;

  // replace the car in the database
  const replacedCar = req;

  // send the response
  res.status(200).json(replacedCar);
};

// DELETE /cars/:id
const deleteCar = (req, res) => {
  const carId = req.params.id;

  // delete the car from the database
  req;

  // send the response
  res.status(204).send();
};

export default { getCars, createCar, updateCar, replaceCar, deleteCar };
