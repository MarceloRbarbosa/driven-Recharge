import express, { json } from "express";
import chalk from "chalk";
import healthRouter from "./routes/health-routes";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());

app.use(healthRouter);


const port = process.env.PORT || 5000
app.listen(port, () =>{
console.log(chalk.yellow(`Servidor está rodando na porta ` + chalk.cyan(`${port}`)))
})