import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller.ts";

class EmployeeRoutes {
    router: Router;

    constructor(readonly employeeCtrl: EmployeeController = new EmployeeController()) {
        this.employeeCtrl = employeeCtrl;
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/employee', this.employeeCtrl.getAllEmployees);
        this.router.get('/employee/:id', this.employeeCtrl.getEmployeeById);
        this.router.post('/employee', this.employeeCtrl.createEmployee);
    }
}

export default new EmployeeRoutes().router;