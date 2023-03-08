const Sequelize = require("sequelize")
const sequelize = new Sequelize("Teste", "root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar: "+ erro)
})

const Agendamento = sequelize.define("agendamentos",{
        Nome:{type: Sequelize.STRING},
        endereco:{type: Sequelize.STRING},
        bairro:{type: Sequelize.STRING},
        cep:{type: Sequelize.INTEGER},
        estado:{type: Sequelize.STRING},
        observacao:{type: Sequelize.STRING}
    })
    Agendamento.sync({force: true})

    Agendamento.create({
        Nome:"Joao ???",
        endereco:"Av. Águia de Haia, 2983",
        bairro:"Cidade Antônio",
        cep:99999999,
        estado:"São Paulo",
        observacao:"teste de aula"
    })