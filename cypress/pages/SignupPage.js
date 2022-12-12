class SignupPage {
    start() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')   
    }

    fillForm(deliver) {
        //preenchimento formulário
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.adress.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.details)

        //validando campos de preenchimento automatico do CEP
        cy.get('input[name="address"]').should('have.value', deliver.adress.street)
        cy.get('input[name="district"]').should('have.value', deliver.adress.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.adress.city_uf)
    
        //cy.get('img[alt="Moto"]').click()
        cy.contains('.delivery-method li', deliver.delivery_method).click() 
        //contains -> junta localizador css com texto -> encontra elemento mais criterioso


        //upload de arquivo 
        cy.get('input[accept^="image"]').selectFile('cypress/fixtures/cnh-digital.jpg', {force: true})
        // force:true força o cypress a ignorar o “display: none" do input
    
}

    submit() {
        // clicar no botão para cadastrar
        cy.get('button[type="submit"]').click()
    }

    modalContentShouldBe(expectedText){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedText)
    }

    messageShouldBe(expectedText) {
        cy.contains('span[class="alert-error"]',expectedText).should('be.visible')
    }
}

export default new SignupPage;
