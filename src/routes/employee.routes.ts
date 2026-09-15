import { Router } from "express";
import  EmployeeControllers  from "../controllers/employee.controller.ts";


class EmployeeRoutes{

    router:Router

    constructor(readonly employeeCtrl: EmployeeControllers = new EmployeeControllers){
        this.employeeCtrl = employeeCtrl;
        this.router = Router();

    }

    routes(){
        this.router.get('/employee',this.employeeCtrl.findAllEmployees)
    }

}

new EmployeeRoutes