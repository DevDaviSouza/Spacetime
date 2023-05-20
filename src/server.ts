import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const db = new PrismaClient();

app.get('/hello', async () => {
    const users = await db.user.findMany();

    return users;
});
//teste
app.listen({
    port: 3333,
}).then(() => {
    console.log(' 🚀🚀 HTTTP server running on http://localhost:3333')
});