import { FastifyInstance } from "fastify";
import {db} from '../lib/prisma'

export async function userRoutes(app: FastifyInstance) {
    
    app.get('/users', async () => {
        const memories = db.memory.findMany
        let teste = "oi"

        return teste
    });

}