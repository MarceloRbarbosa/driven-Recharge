import express, { json} from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import routers from "./routes/index-routers";
import errorHandler from "./middlewares/error-handle-middleware";
dotenv.config();

const app = express();
app.use(json());
app.use(routers);
app.use(errorHandler);

const port = process.env.PORT || 5000
app.listen(port, () =>{
console.log(chalk.yellow(`Servidor está rodando na porta ` + chalk.cyan(`${port}`)))
})


