import express from "express"
import {createEmployee , getAllEmployee , getEmployee ,updateEmployee ,partialUpdateEmployee ,deleteEmployee} from "../controller/employee.controller.js"

const router = express.Router();
router.post('/', createEmployee);
router.get('/', getAllEmployee);
router.get('/:id', getEmployee);
router.put('/:id', updateEmployee);
router.patch('/:id', partialUpdateEmployee);
router.delete('/:id', deleteEmployee);

export default router
