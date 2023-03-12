import { Router } from "express";
// import {
//   createAppointment,
//   updateAppointment,
//   deleteAppointment,
// } from "../controllers/appointmentHandlers.js";

// import route handlers for each router
import customersHandlers from "../controllers/customersHandlers.js";
import employeesHandlers from "../controllers/employeesHandlers.js";
import storesHandlers from "../controllers/storesHandlers.js";
import carsHandlers from "../controllers/carsHandlers.js";
import ownersHandlers from "../controllers/ownersHandlers.js";
import searchHandlers from "../controllers/searchHandlers.js";
import savedHandlers from "../controllers/savedHandlers.js";
import appointmentHandlers from "../controllers/appointmentHandlers.js";
import inventoryHandlers from "../controllers/inventoryHandlers.js";

const router = Router();

// define GET routes for each resource
router.get("/customers", customersHandlers.getCustomers);
router.get("/employees", employeesHandlers.getEmployees);
router.get("/stores", storesHandlers.getStores);
router.get("/cars", carsHandlers.getCars);
router.get("/owners", ownersHandlers.getOwners);
router.get("/search", searchHandlers.getSearchResults);
router.get("/saved", savedHandlers.getSavedCars);
router.get("/appointment", appointmentHandlers.getAppointments);
router.get("/inventory", inventoryHandlers.getInventory);

// // define POST routes for each resource
router.post("/customers", customersHandlers.createCustomer);
router.post("/employees", employeesHandlers.createEmployee);
router.post("/stores", storesHandlers.createStore);
router.post("/cars", carsHandlers.createCar);
router.post("/owners", ownersHandlers.createOwner);
router.post("/saved", savedHandlers.saveCar);
router.post("/appointment", appointmentHandlers.createAppointment);
router.post("/inventory", inventoryHandlers.createInventoryItem);

// define PATCH routes for each resource
router.patch("/customers/:id", customersHandlers.updateCustomer);
router.patch("/employees/:id", employeesHandlers.updateEmployee);
router.patch("/stores/:id", storesHandlers.updateStore);
router.patch("/cars/:id", carsHandlers.updateCar);
router.patch("/owners/:id", ownersHandlers.updateOwner);
router.patch("/saved/:id", savedHandlers.updateSavedCar);
router.patch("/appointment/:id", appointmentHandlers.updateAppointment);
router.patch("/inventory/:id", inventoryHandlers.updateInventoryItem);

// define PUT routes for each resource
router.put("/customers/:id", customersHandlers.replaceCustomer);
router.put("/employees/:id", employeesHandlers.replaceEmployee);
router.put("/stores/:id", storesHandlers.replaceStore);
router.put("/cars/:id", carsHandlers.replaceCar);
router.put("/owners/:id", ownersHandlers.replaceOwner);
router.put("/saved/:id", savedHandlers.replaceSavedCar);
router.put("/appointment/:id", appointmentHandlers.replaceAppointment);
router.put("/inventory/:id", inventoryHandlers.replaceInventoryItem);

// define DELETE routes for each resource
router.delete("/customers/:id", customersHandlers.deleteCustomer);
router.delete("/employees/:id", employeesHandlers.deleteEmployee);
router.delete("/stores/:id", storesHandlers.deleteStore);
router.delete("/cars/:id", carsHandlers.deleteCar);
router.delete("/owners/:id", ownersHandlers.deleteOwner);
router.delete("/saved/:id", savedHandlers.unsaveCar);
router.delete("/appointment/:id", appointmentHandlers.deleteAppointment);
router.delete("/inventory/:id", inventoryHandlers.deleteInventoryItem);

export { router };
