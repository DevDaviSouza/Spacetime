//fastify é como o express, utilizado para fazer as requisições dos
import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';
import { userRoutes } from './routes/user';
//import do cors, ele é utilizado para selecionar quais url's podem acessar a API
import cors from '@fastify/cors'
//instanciando ferramenta utilizada para acessar verbos http.
const app = fastify();

//Importando arquivos de outras rotas.
app.register(memoriesRoutes)
app.register(cors, {
    origin: 'http://localhost:3333', 
})
app.register(userRoutes)

//execução do programa
app.listen({port: 3333,}).then(() => { console.log(' 🚀🚀 HTTTP server running on http://localhost:3333')});