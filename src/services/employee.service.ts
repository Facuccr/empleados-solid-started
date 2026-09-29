import { IEmployee } from "../models/employee.models.ts";
import EmployeeRepositoy from "../repository/employee.repository.ts";

class EmployeeService {
    private employeeRepository = new EmployeeRepositoy()

    async getAllEmployees(){
        return await this.employeeRepository.findAll()
    }

    async getEmployeeById(id:string){
        const employee = await this.employeeRepository.findById(id)
        if (!employee){
            throw new Error('el empleado no existe')
        }
        return employee
    }

    async createEmployee(data:Omit<IEmployee, 'finalySalary'> ){
        //extra por antiguedad
        const bonusPorcentage = data.yearsOfService * 0.02;
        const bonusAmount = data.baseSalary * bonusPorcentage;

        //calculo salario final
        const finalSalary = data.baseSalary + bonusAmount;

        //se arma el obj completo para guardarlo
        const employeeToSave: IEmployee = {
            ...data,
            finalSalary,
        }
        return await this.employeeRepository.create(employeeToSave);
    }

}

export default EmployeeService;