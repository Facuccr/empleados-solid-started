 import { Request, Response, NextFunction } from 'express';
 import EmployeeService from '../services/employee.service.ts';

    export class EmployeeController {
      private employeeService = new EmployeeService();

     
      getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const employees = await this.employeeService.getAllEmployees();
          res.status(200).json(employees);
        } catch (error) {
          next(error); 
        }
      };

      getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id = req.params.id as string; 
          const employee = await this.employeeService.getEmployeeById(id);
          res.status(200).json(employee);
        } catch (error) {
          next(error);
        }
      };

  
      createEmployee = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const newEmployee = await this.employeeService.createEmployee(req.body);
          res.status(201).json(newEmployee); 
        } catch (error) {
          next(error);
        }
      };
    }