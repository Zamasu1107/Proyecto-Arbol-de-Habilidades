import type { Request, Response } from 'express';
import prisma from '../database/prisma/prisma.js';

export class SkillTreeController {

    obtenerDatos = async (_req:Request, res:Response) => {
        try {
            // 1. Vamos a la cocina (Modelo) a pedir los datos de MySQL
            const datos = await prisma.miprogreso.findMany()
            
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
            
            await prisma.miprogreso.update({
                where: {
                    tema: tema // Buscamos por el tema
                },
                data: {
                    nivel: nivel, // Actualizamos el nivel
                    xp: xp        // Actualizamos la xp
                }
            });
            return res.json(true);

        } catch (error) {
            console.error("Error en el Controlador al guardar:", error);
            res.status(500).json({ error: 'Error interno al guardar los datos' });
            return(false);
        }   
    }
}