import { Schema, model, Document } from "mongoose";

//interfaz de negocio
export interface IEmployee {
    name:string;
    position:string;
    baseSalary: number;
    yearsOfService:number;
    finalSalary: number;
    createdAt?: Date;
    updatedAt?: Date
}

// interfaz para mongoose
export interface IEmployeeDocument extends IEmployee, Document{}

const employeeSchema = new Schema<IEmployeeDocument>(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        baseSalary: { type: Number, required: true },
        yearsOfService: { type: Number, required: true },
        finalSalary: { type: Number, required: true }
      },
      { timestamps: true }
);

export const EmployeeModel = model<IEmployeeDocument>('Employee', employeeSchema);