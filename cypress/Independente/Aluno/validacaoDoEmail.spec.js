describe('Validação campo e-mail do aluno  ', function() {

    var nomeAluno = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()
    })

    it('Valida a inserção de e-mail invalidos', function() {
        cy.get('#atalho-adicionar-aluno').click()
        cy.GeraUmNomeDeAlunoAleatorio()
        cy.get('#pacto-select-professor').click()
        cy.get('#pacto-select-professor-0').click()
        cy.get('#email-input').type('emailerrado')
        cy.get('#email-adicionar').click()
        cy.contains('O Formato do email informado é inválido.')
        cy.get('#email-input').clear().type('email@errado')
        cy.get('#email-adicionar').click()
        cy.contains('O Formato do email informado é inválido.')
        cy.get('#email-input').clear().type('emailerrado@')
        cy.get('#email-adicionar').click()
        cy.contains('O Formato do email informado é inválido.')
        cy.get('#email-input').clear().type('@pacto.')
        cy.get('#email-adicionar').click()
        cy.contains('O Formato do email informado é inválido.')
        cy.get('#email-input').clear().type('emailerrado@1231231.com.com')
        cy.get('#email-adicionar').click()
        cy.contains('O Formato do email informado é inválido.')
        cy.get('#salvar-cadastro-aluno').click()
        cy.contains('Aluno cadastrado com sucesso')
    })

    it('Valida a inserção de e-mail validos', function() {
        cy.get('#atalho-adicionar-aluno').click()
        cy.GeraUmNomeDeAlunoAleatorio()
        cy.get('#pacto-select-professor').click()
        cy.get('#pacto-select-professor-0').click()
        cy.get('#email-input').type('pedrobrossma@gmail.com')
        cy.get('#email-adicionar').click()  
        cy.get('#email-input').clear().type('pedroem@pactosolucoes.com.br')
        cy.get('#email-adicionar').click()   
        cy.get('#email-input').clear().type('prdrobro@hotmail.com')
        cy.get('#email-adicionar').click()   
        cy.get('#email-input').clear().type('pedroasd@icloud.com')
        cy.get('#email-adicionar').click()  
        cy.get('#email-input').clear().type('pedrotrue@over.com.br')
        cy.get('#email-adicionar').click()
        cy.get('#salvar-cadastro-aluno').click()
        cy.contains('Aluno cadastrado com sucesso')
        cy.get('.right-aux > .column > .info-bit > .bit-value > .ver-mais').click()
        cy.contains('pedrobrossma@gmail.com')
        cy.contains('pedroem@pactosolucoes.com.br')
        cy.contains('prdrobro@hotmail.com')
        cy.contains('pedroasd@icloud.com')
        cy.contains('pedrotrue@over.com.br')
    })
})

