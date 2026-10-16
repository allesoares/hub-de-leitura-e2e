// Preenche o formulário de cadastro
Cypress.Commands.add('preencherCadastro', (nome, email, telefone, senha, confirmacaoSenha) => {
    cy.get('#name').type(nome);
    cy.get('#email').type(email);
    cy.get('#phone').type(telefone);
    cy.get('#password').type(senha, { log: false });
    cy.get('#confirm-password').type(confirmacaoSenha, { log: false });
    cy.get('#terms-agreement').check();
});

// Preenche e envia o formulário de login
Cypress.Commands.add('login', (email, senha) => {
    cy.get('#email').type(email);
    cy.get('#password').type(senha, { log: false });
    cy.get('#login-btn').click();
});
