import express, { Application } from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import employeeRoutes from "./routes/employee.routes.ts";

class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;

        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        try {
            const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/employees_db';
            await mongoose.connect(MONGO_URI);
            console.log('MongoDB conectado exitosamente');
        } catch (error) {
            console.error('No se pudo conectar a MongoDB', error);
            process.exit(1);
        }
    }
    
    routes() {
        this.app.use('/', employeeRoutes);
    }
    
    middlewares() {
        this.app.use(express.json());
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en http://localhost:${this.port}`);
        });
    }
}
const server = new Server();
server.listen();

export default Server;