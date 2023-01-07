import {Router} from "express";
import jobRoleController from "../controller/humanresource/jobRoleController"


const router = new Router();
/* JOB_ROLE */
router.get("/jobrole", jobRoleController.findAllRows)
router.get("/jobrole/:id", jobRoleController.findAllRowsById)
router.post("/jobrole/", jobRoleController.createJobRole)
router.put("/jobrole/:id", jobRoleController.updateJobRole)
router.delete("/jobrole/:id", jobRoleController.deleteJobRole)




export default router