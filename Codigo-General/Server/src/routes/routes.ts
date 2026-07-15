import { Router } from "express";
import { SkillTreeController } from "../controllers/dbController.js";

const router = Router();
const skillController = new SkillTreeController() 

    router.get('/api/progreso', skillController.obtenerDatos)
    router.post('/api/entrenar', skillController.guardarDatos)

export default router;
