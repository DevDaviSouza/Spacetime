import { FastifyInstance } from "fastify"
import { db } from '../lib/prisma'

//o zod serve para validar o tipo de dado utilizdo nos parametros e validar sua  assinatura
import {z} from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {
    
    app.get('/memories', async () => {
   
        const memories = await db.memory.findMany({
            orderBy: {
                CreatedAt: 'asc',
            }
        })

        return memories.map(memory => {
            return {
                id: memory.id,
                coverUrl: memory.coverUrl,
                excerpt: memory.content.substring(0, 115).concat('...').concat('ler mais')
            }
        })
    })


    app.get('/memories/:id', async (req) => {
        //const { id } = req.params
        
        //validação de assinatura
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })


        const {id} = paramsSchema.parse(req.params)

        const memory = await db.memory.findUniqueOrThrow({
            where: {
                id,
            },
        })

        return memory
    });

    app.put('/memories/:id', async (req) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const {id} = paramsSchema.parse(req.params)
        
        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false),
        })

        const { content, coverUrl, isPublic } = bodySchema.parse(req.body)
        
        await db.memory.update({
            where: {
                id,
            },
            data: {
                content,
                coverUrl,
                isPublic
            },
        })
    })

    app.post('/memories', async (req) => {
        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false),
        })

        const { content, coverUrl, isPublic } = bodySchema.parse(req.body)
        
        const memory = await db.memory.create({
            data: {
                content,
                coverUrl,
                isPublic,
                userId: 'd5141be7-c4d6-4bf7-83db-e95cad0e0c2b',
            }
        })

        return memory
    })

    app.delete('/memories/:id', async (req) => {
    
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(req.params)
        
        await db.memory.delete({
            where: {
                id,
            },
        })
    })
}