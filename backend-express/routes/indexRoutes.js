import { Router } from "express";
import jobRoleController from "../controller/humanresource/jobRoleController"
<<<<<<< Updated upstream
import rolesController from "../controller/users/rolesController";
import usersController from "../controller/users/usersController";
import userRolesController from "../controller/users/userRolesController";
=======
import hotelController from "../controller/hotel/hotelController";

>>>>>>> Stashed changes

const router = new Router();
/* JOB_ROLE */
router.get("/jobrole", jobRoleController.findAllRows)
router.get("/jobrole/:id", jobRoleController.findAllRowsById)
router.post("/jobrole/", jobRoleController.createJobRole)
router.put("/jobrole/:id", jobRoleController.updateJobRole)
router.delete("/jobrole/:id", jobRoleController.deleteJobRole)
// hotel
router.get("/hotels", hotelController.findAllHotels)
router.put("edit/hotels/:id", hotelController.updateHotels)

/* USERS.ROLES */
router.get("/roles", rolesController.findAllRows)
router.get("/roles/:id", rolesController.findAllRowsById)
router.post("/roles/", rolesController.createRoles)
router.put("/roles/:id", rolesController.updateRoles)
router.delete("/roles/:id", rolesController.deleteRoles)

/* USERS.USERS */
router.get("/users", usersController.findAllRows)
router.get("/users/:id", usersController.findAllRowsById)
router.post("/users/", usersController.createUsers)
router.put("/users/:id", usersController.updateUsers)
router.delete("/users/:id", usersController.deleteUsers)

/* USERS.USER_ROLES */
router.get("/userRoles", userRolesController.findAllRows)
router.get("/userRoles/:id", userRolesController.findAllRowsById)
router.post("/userRoles/", userRolesController.createUserRoles)
router.put("/userRoles/:id", userRolesController.updateUserRoles)
router.delete("/userRoles/:id", userRolesController.deleteUserRoles)


export default router