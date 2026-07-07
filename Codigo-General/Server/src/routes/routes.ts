import { Router } from "express";
import { SkillTreeController } from "../controllers/dbController.js";
import { SkillTreeModel } from "../models/dbModel.js";

const router = Router();
const skillController = new SkillTreeController({SkillTreeModel}) 

    router.get('/api/progreso', skillController.obtenerDatos)
    router.post('/api/entrenar', skillController.guardarDatos)

export default router;
