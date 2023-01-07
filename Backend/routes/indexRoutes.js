import { Router } from "express";
import jobRoleController from "../controller/humanresource/jobRoleController"
import rolesController from "../controller/users/rolesController";

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



export default router