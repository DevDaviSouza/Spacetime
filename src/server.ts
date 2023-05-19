import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.get('/hello', async () => {
    const users = await prisma.user.findMany();

    return users;
});
//teste
app.listen({
    port: 3333,
}).then(() => {
    console.log(' 🚀🚀 HTTTP server running on http://localhost:3333')
});