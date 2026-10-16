# Hub de Leitura — Cadastro e login end-to-end

Projeto Cypress Hub Leitura Cadastro e Login End to End ( os estudos com todos os exercicios estão no projeto hub-de-leitura-teste-ui )

## Objetivo ##
- Automatizar um fluxo completo (cadastro + login) em um único teste
- Aplicar boas práticas de automação, como comandos customizados e geração de dados com Faker
- Praticar organização e legibilidade de código de automação
- Versionar o trabalho com commits organizados no GitHub

O arquivo `cypress/e2e/end-to-end.cy.js` contém um único teste (`it`) que percorre o fluxo completo:

1. Acessa a página de cadastro.
2. Preenche o formulário com nome e e-mail gerados pelo Faker e envia o cadastro.
3. Valida redirecionamento ao dashboard e o nome do usuário.
4. Realiza logout
5. Preenche e envia o login com o mesmo e-mail e senha usados no cadastro.
6. Valida redirecionamento ao dashboard e o nome do usuário.

## Iniciar o Hub de Leitura

Em um terminal separado, na pasta da aplicação:

```powershell
cd C:\repositorio\hub-de-leitura-integrado
npm start
```

Mantenha a aplicação rodando em `http://localhost:3000/`, endereço definido em `cypress.config.js`.

## Instalar e executar os testes

Na pasta deste projeto:

```powershell
npm install
npm test
```

Para abrir a interface do Cypress:

```powershell
npm run cy:open
```

Selecione **E2E Testing**, escolha um navegador e execute `end-to-end.cy.js`.