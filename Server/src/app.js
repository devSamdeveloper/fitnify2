import express from 'express';
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.mjs";
import clientsRoutes from "./routes/clients.routes.mjs";
import ejerciciosRoutes from "./routes/ejercicios.routes.mjs";
import rutinesRoutes from "./routes/rutines.routes.mjs";
import cookieParser from 'cookie-parser';



const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cookieParser());

app.use('/api', authRoutes);

app.use('/api', clientsRoutes);

app.use('/api', ejerciciosRoutes);

app.use('/api', rutinesRoutes);


export default app;