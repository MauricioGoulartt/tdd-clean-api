import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

export function setupSwagger(app: Express) {
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
    apis: ['./src/routes/*.ts'], // Atualize o caminho para os arquivos de rotas da sua API
  };

  const specs = swaggerJsdoc(options);

  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(specs));
}
