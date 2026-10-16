import { faker } from '@faker-js/faker';

describe('Fluxo end-to-end: Cadastro e login no Hub de Leitura', () => {

    it('Deve cadastrar um novo usuário e fazer login com as mesmas credenciais', () => {

        const nome = faker.person.fullName()
        const email = faker.internet.email()
        const telefone = '11999999999'
        const senha = 'senha123'

        // Acessar, preencher e validar o cadastro.
        cy.visit('register.html')
        cy.preencherCadastro(nome, email, telefone, senha, senha)
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard');
        cy.get('#user-name').should('have.text', nome);

        // Sair pelo dashboard antes de testar um novo login.
        cy.get('#logout-button').click()
        cy.url().should('include', '/login.html')

        // Preencher e validar o login com as credenciais do cadastro.
        cy.login(email, senha)
        cy.get('#alert-container').should('contain.text', 'Login realizado com sucesso!')
        cy.url().should('include', 'dashboard');
        cy.get('#user-name').should('have.text', nome);
    });
});
