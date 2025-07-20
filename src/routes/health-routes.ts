
import { healthCheck } from "../controllers/health-controllers";
import { Router } from "express";

const healthRouter = Router();
healthRouter.get("/health", healthCheck);

export default healthRouter;