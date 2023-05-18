import payload from '../../../cypress.env.js'

describe('buscar fotos e dados', () => {

    it('buscar fotos do flavio', () => {
        //const tempoEsperado = Math.random() * 3000;  //criado uma variavel para gerar um numero randomico e multiplicar por 3000
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200) //verifica se retorna status 200
            expect(res.body).is.not.empty        //verifica se não esta retornando vazio
            expect(res.body[0]).to.have.property('description')     //verifica se na primeira foto tem um campo description
            expect(res.body[0].description).to.be.equal('Farol iluminado')  //verifica se na primeira foto, o campo description é igual a Farol iluminado 
            //expect(res.duration).to.be.lte(tempoEsperado)   //verifica se o tempo de duração é menor que o tempoEsperado
        })
    })

    it('buscar login do flavio', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: payload.dadosLogin
            // body: {
            //     userName: 'flavio',
            //     password: '123'
            // }
        }).should(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty        
            expect(res.body).to.have.property('id')     
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')     
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br') 
        }) 
    })
}) 