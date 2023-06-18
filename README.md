# API Node Type TDD

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

## Estrutura do Projeto

Os principais arquivos e diretórios neste projeto estão organizados da seguinte forma:

- `index.js`: O ponto de entrada da aplicação.
- `src/`: Contém o código-fonte da aplicação.
- `app.ts`: O arquivo principal onde a aplicação Express é configurada.
- `test/`: Contém os arquivos de teste para a aplicação.

## Dependências

O projeto possui as seguintes dependências principais:

- `express`: Um framework web rápido e minimalista para Node.js.
- `mongodb`: O driver oficial do MongoDB para Node.js.
- `mongoose`: Uma ferramenta de modelagem de objetos para o MongoDB.
- `jsonwebtoken`: Uma biblioteca para criar e verificar JSON Web Tokens (JWTs).

Para ver a lista completa de dependências e devDependencies, consulte o arquivo `package.json`.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir problemas e enviar pull requests para melhorar o código, adicionar recursos ou corrigir bugs.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo `LICENSE` para obter mais informações.

## Contato

Se você tiver alguma dúvida ou sugestão em relação a este projeto, pode entrar em contato com Mauricio Goulart em mauriciogoulart.1990@gmail.com.
