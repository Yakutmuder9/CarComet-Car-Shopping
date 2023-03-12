// GET /search
const getSearchResults = (req, res) => {
  // retrieve all saved cars for the authenticated user from the database
  const savedCars = req;

  // send the response
  res.status(200).json(savedCars);
};


// POST /search
const searchCars = (req, res) => {
  // search for cars in the database based on the search criteria in the request body
  const searchResults = req;

  // send the response
  res.status(200).json(searchResults);
};

export default { getSearchResults, searchCars }