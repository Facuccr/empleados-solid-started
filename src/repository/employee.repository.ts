import { EmployeeModel,IEmployee } from "../models/employee.models.ts";


class EmployeeRepositoy {

    async findAll(){
        return await EmployeeModel.find();
    }

    async findById(id:string){
        return await EmployeeModel.findById(id);
    }

    async create(employeeData:IEmployee){
        const newEmployee = new EmployeeModel(employeeData)
        return await newEmployee.save();
    }

}

export default EmployeeRepositoy;