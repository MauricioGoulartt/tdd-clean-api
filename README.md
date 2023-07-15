# API Node - Typescript, TDD e Clean Architecture.

Este é um modelo de projeto de API para criar uma aplicação semelhante ao YouTube. Ele fornece um ponto de partida para construir um servidor Node.js com TypeScript, Express, MongoDB e Jest para testes. O projeto é mantido por Mauricio Goulart (mauriciogoulart.1990@gmail.com).

## Instalação

Para começar com este projeto, siga as instruções abaixo:

1. Clone o repositório:

```
git clone https://github.com/MauricioGoulartt/api-node-type-tdd.git
```

2. Navegue até o diretório do projeto:

```
cd api-node-type-tdd
```

3. Instale as dependências:

```
npm install
```


## Uso

Você pode usar os seguintes scripts fornecidos no projeto:

- `npm test`: Executa o conjunto de testes usando o Jest, incluindo a detecção de alterações.
- `npm run lint`: Executa a verificação de código nos arquivos TypeScript usando o ESLint.
- `npm run lint:watch`: Executa automaticamente a verificação de código nos arquivos TypeScript quando são detectadas alterações.
- `npm run build`: Compila os arquivos TypeScript para JavaScript.
- `npm start`: Inicia o servidor usando os arquivos JavaScript compilados.
- `npm run prepare`: Instala o gancho de pré-commit do Husky.
- acesse o swagger pelo http://localhost:3000/api-docs/#/

## Estrutura do Projeto

Os principais arquivos e diretórios neste projeto estão organizados da seguinte forma:

- `index.js`: O ponto de entrada da aplicação.
- `src/`: Contém o código-fonte da aplicação.
- `app.ts`: O arquivo principal onde a aplicação Express é configurada.
- `test/`: Contém os arquivos de teste para a aplicação.

## Dependências

O projeto possui as seguintes dependências principais:

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

Para ver a lista completa de dependências e devDependencies, consulte o arquivo `package.json`.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir problemas e enviar pull requests para melhorar o código, adicionar recursos ou corrigir bugs.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo `LICENSE` para obter mais informações.

## Contato

Se você tiver alguma dúvida ou sugestão em relação a este projeto, pode entrar em contato com Mauricio Goulart em mauriciogoulart.1990@gmail.com.
