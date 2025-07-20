import express, { json } from "express";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());


const port = process.env.PORT || 5000
app.listen(port, () =>{
console.log(chalk.yellow(`Servidor está rodando na porta ` + chalk.cyan(`${port}`)))
})