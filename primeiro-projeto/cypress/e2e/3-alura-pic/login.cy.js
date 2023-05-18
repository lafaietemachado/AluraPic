describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')

        // cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', { //Interceptar o retorno do POST para forçar erro
        //     statusCode: 400
        // }).as('stubPost')
    })

    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123')
        //cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');       
    })

    it('fazer login de usuario invalido', () => {
        cy.login('lafaiete', '1234')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    }) 
})