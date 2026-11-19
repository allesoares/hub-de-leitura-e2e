# Cadastro e login com Cypress

Neste exercício, automatizei um fluxo completo do Hub de Leitura: cadastrar um usuário, confirmar o acesso, fazer logout e entrar novamente com as mesmas credenciais. A ideia foi validar a continuidade do fluxo em um único teste, usando dados gerados com Faker e comandos customizados.

**Tecnologias:** Cypress, JavaScript, Node.js e Faker.

## O que o teste verifica

O cenário está em [end-to-end.cy.js](cypress/e2e/end-to-end.cy.js). Ele confere o redirecionamento para o dashboard, o nome do usuário e o novo acesso após o logout. Os [comandos de cadastro e login](cypress/support/commands.js) concentram as ações reutilizadas.

## Como executar

Tenha Node.js, npm e Chrome instalados. Em outro terminal, inicie o [Hub de Leitura integrado](https://github.com/EBAC-QE/hub-de-leitura-integrado), seguindo as instruções da aplicação. Ela deve estar disponível em `http://localhost:3000`.

Na pasta dos testes:

```powershell
npm ci
npm test
```

Para acompanhar pela interface do Cypress:

```powershell
npm run cy:open
```

Selecione o arquivo `end-to-end.cy.js`. O teste cria um usuário fictício a cada execução.

## Outros exercícios de interface

Os estudos de cadastro, contato, catálogo e integração contínua estão no [projeto principal de testes UI](https://github.com/allesoares/hub-de-leitura-teste-ui).

## Contexto

Exercício desenvolvido por Alexandre Soares durante o curso da EBAC, com a aplicação e os exemplos fornecidos nas aulas.

[Voltar ao portfólio](https://github.com/allesoares/qa-portfolio)
