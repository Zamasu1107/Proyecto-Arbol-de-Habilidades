import type { Request, Response } from 'express';
import { SkillTreeModel } from '../models/dbModel.js';

export class SkillTreeController {
    private stModel: typeof SkillTreeModel
    constructor( { SkillTreeModel }: { SkillTreeModel: any } ) {
        this.stModel = SkillTreeModel
    }

    obtenerDatos = async (_req:Request, res:Response) => {
        try {
            // 1. Vamos a la cocina (Modelo) a pedir los datos de MySQL
            const datos = await this.stModel.obtenerDatos();
            
            // 2. Le servimos los datos al Front-End en formato JSON
            res.json(datos);
        } catch (error) {
            // Si la cocina se incendia, le avisamos al Front-End con un error 500
            res.status(500).json({ error: 'Error interno al cargar la partida' });
        }
    } 

    guardarDatos = async (req:Request, res:Response) => {
        try {
            const {tema, nivel, xp } = req.body;
            
            const updateDatos = await this.stModel.guardarDatos(tema, nivel, xp);
            return res.json(updateDatos);

        } catch (error) {
            console.error("Error en el Controlador al guardar:", error);
            res.status(500).json({ error: 'Error interno al guardar los datos' });
        }   
    }
}