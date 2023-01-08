import { Router } from "express";
import jobRoleController from "../controller/humanresource/jobRoleController"
import rolesController from "../controller/users/rolesController";
import usersController from "../controller/users/usersController";

const router = new Router();
/* JOB_ROLE */
router.get("/jobrole", jobRoleController.findAllRows)
router.get("/jobrole/:id", jobRoleController.findAllRowsById)
router.post("/jobrole/", jobRoleController.createJobRole)
router.put("/jobrole/:id", jobRoleController.updateJobRole)
router.delete("/jobrole/:id", jobRoleController.deleteJobRole)

/* USERS.ROLES */
router.get("/roles", rolesController.findAllRows)
router.get("/roles/:id", rolesController.findAllRowsById)
router.post("/roles/", rolesController.createRoles)
router.put("/roles/:id", rolesController.updateRoles)
router.delete("/roles/:id", rolesController.deleteRoles)

/* USERS.users */
router.get("/users", usersController.findAllRows)
router.get("/users/:id", usersController.findAllRowsById)
router.post("/users/", usersController.createUsers)
router.put("/users/:id", usersController.updateUsers)
router.delete("/users/:id", usersController.deleteUsers)


export default router