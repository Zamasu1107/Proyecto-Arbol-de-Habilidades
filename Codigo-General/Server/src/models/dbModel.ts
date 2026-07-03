import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import pool from '../database/db.js';

export class SkillTreeModel {
    static async obtenerDatos () {
        try {
            const [datos] = await pool.query<RowDataPacket[]>(`SELECT * FROM miProgreso;`)

            return datos;
        } catch (error) {
            console.error("Error al consultar la base de datos:", error);
            throw new Error("No se pudo cargar la partida");
        }
    }

    static async guardarDatos (tema:string, nivel:number, xp:number) {
        try {
            const [guardar] = await pool.query<ResultSetHeader>('UPDATE miProgreso SET nivel = ?, xp = ? WHERE tema = ?;' , [nivel, xp, tema])

            return guardar.affectedRows > 0;
        } catch(error) {
            console.error("Error al actualizar la base de datos:", error);
        }
    }
}