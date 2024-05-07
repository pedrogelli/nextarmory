import { sql } from '@vercel/postgres';
import {
    Usuario,
    Barra_progresso,
    Registro_progresso,
} from '../lib/definitions';
import Barra from '../game/barra';
import { stringify } from 'querystring';


export async function fetchProgressBars() {
    try {
        const data = await sql <Barra_progresso>`SELECT * FROM barra_progresso`;
        console.log(data.rows[0].id_barra);

        const barra_info = data.rows.map( (barra) => ({
            ...barra,
            id_barra: barra.id_barra,
        }) );

        console.log(barra_info[0].id_usuario);
        return /*data.rows*/barra_info;
    } catch (error) {
        console.log('Database error: ', error);
        throw new Error('Failed to fetch progress bars');
    }
}