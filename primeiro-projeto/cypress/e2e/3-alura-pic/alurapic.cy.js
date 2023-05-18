describe('Usabilidade pagina inicial', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('verifica botao habilitado tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('anakin');
        cy.get('input[formcontrolname="password"]').type('darthvader');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('verifica nome da aplicacao na tela inicial', () => {
        cy.contains('a', ' ALURAPIC ').should('be.visible');
    })

    it('verifica menu clicavel tela inicial', () => {
        cy.get('i.fa.fa-bars.mr-2').click();
        cy.get('i.fa.fa-window-close').should('be.visible');
    })  
})