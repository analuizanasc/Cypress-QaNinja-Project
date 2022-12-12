//importar biblioteca faker que foi instalada por: npm install faker --save-dev
//forma de importar no node.js -> require
var faker = require('faker')
//importar biblioteca para gerar cpf instalado por: npm install gerador-validador-cpf --save-dev
var cpf = require('gerador-validador-cpf')


export default {
    deliver: function() {
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            //name: 'Ana Nascimento',
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            //email: 'anaqa@gmail.com', 
            whatsapp: '83 995624020',
            adress: {
              postalcode: '58411005',
              street: 'Rua Sandra Vasconcelos Pereira de Melo',
              number: '87',
              details: 'apt 202',
              district: 'Itararé',
              city_uf: 'Campina Grande/PB'
            },
            delivery_method: 'Bike Elétrica'
        }

        return data
    }
}