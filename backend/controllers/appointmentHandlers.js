// GET /appointment
const getAppointments = (req, res) => {
  // create a new appointment in the database
  // const newAppointment = req;
  console.log("app");
  // send the response
  // res.status(201).json(newAppointment);
};
// POST /appointment
const createAppointment = (req, res) => {
  // create a new appointment in the database
  // const newAppointment = req;
  console.log("app");
  // send the response
  // res.status(201).json(newAppointment);
};

// PUT /appointment/:id
const updateAppointment = (req, res) => {
  // const appointmentId = req.params.id;
  console.log("update app");
  // update the appointment in the database
  // const updatedAppointment = req;

  // send the response
  // res.status(200).json(updatedAppointment);
};
// PUT /appointment/:id
const replaceAppointment = (req, res) => {
  // const appointmentId = req.params.id;
  console.log("update app");
  // update the appointment in the database
  // const updatedAppointment = req;

  // send the response
  // res.status(200).json(updatedAppointment);
};

// DELETE /appointment/:id
const deleteAppointment = (req, res) => {
  // const appointmentId = req.params.id;
  console.log("app");
  // delete the appointment from the database

  // send the response
  // res.status(204).send();
};

export default { getAppointments, createAppointment, updateAppointment,replaceAppointment, deleteAppointment };
