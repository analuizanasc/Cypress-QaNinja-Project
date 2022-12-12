import signup from "../pages/SignupPage"
import signupFactory from "../factories/SignupFactory"
import SignupPage from "../pages/SignupPage"


describe('Signup', () => {

  // beforeEach( function(){
  //   cy.fixture('deliver').then((d) => {
  //     this.deliver = d
  //   })
  // })


  it('User should be deliver', function() {

    var deliver = signupFactory.deliver()

    signup.start()
    signup.fillForm(deliver)
    signup.submit()

    //validar mensagem de confirmação de cadastro
    const expectedText = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedText)
  })

  it('Invalid document', function() {
  
    var deliver = signupFactory.deliver()

    deliver.cpf = '209487633AA'

    signup.start()
    signup.fillForm(deliver)
    signup.submit()
    signup.messageShouldBe('Oops! CPF inválido')
  })

  it('Invalid email', function() {

    var deliver = signupFactory.deliver()

    deliver.email = 'anaqa.com.br'

    signup.start()
    signup.fillForm(deliver)
    signup.submit()
    signup.messageShouldBe('Oops! Email com formato inválido.')
  })

  context('required fileds', function() {
    const messages = [
      {field:'name', output: 'É necessário informar o nome'},
      {field:'cpf', output: 'É necessário informar o CPF'},
      {field:'email', output: 'É necessário informar o email'},
      {field:'postalcode', output: 'É necessário informar o CEP'},
      {field:'number', output: 'É necessário informar o número do endereço'},
      {field:'delivery_method', output: 'Selecione o método de entrega'},
      {field:'cnh', output: 'Adicione uma foto da sua CNH'}
    ]

    before(function(){
      signup.start()
      signup.submit()
    })

    messages.forEach((msg) => {
      it(`${msg.field} is required`, ()=>{
        signup.messageShouldBe(msg.output)
      })  
    })

  })

//maneira diferente de validar campos:
/*   it('Required fields', function() {
    signup.start()
    signup.submit()
    signup.messageShouldBe('É necessário informar o nome')
    signup.messageShouldBe('É necessário informar o CPF')
    signup.messageShouldBe('É necessário informar o CEP')
    signup.messageShouldBe('É necessário informar o email')
    signup.messageShouldBe('É necessário informar o número do endereço')
    signup.messageShouldBe('Selecione o método de entrega')
    signup.messageShouldBe('Adicione uma foto da sua CNH')
  }) */

})