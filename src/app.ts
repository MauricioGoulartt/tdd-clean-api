import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';
import router from './routes/routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

dotenv.config();

export const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Meu Projeto',
      version: '1.0.0',
      description: 'Documentação da API do Meu Projeto',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Atualize a URL de acordo com o servidor da sua API
      },
    ],
  },
  apis: [path.join(__dirname, './routes/*.ts')], // Atualize o caminho para os arquivos de rotas da sua API
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(json());
app.use(urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    w: 'majority', // majority write concern
  })
  .then(() => console.log('Mongo Connected!'))
  .catch((err) => console.log(err));

app.use('/', router);

const PORT = process.env.PORT || 3000;

export const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
