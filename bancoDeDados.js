const mongoose = require('mongoose')

async function conectaBandoDeDados() {
    try{
        console.log('Conexão com banco de dados iniciou')

        await mongoose.connect('mongodb+srv://tamires0706:BSfs66H7wLklm7pi@clustermulheres.uion4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres')

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBandoDeDados