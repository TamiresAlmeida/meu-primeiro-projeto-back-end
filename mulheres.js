const express = require ("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota

const app = express () //aqui estou iniciando o app
const porta = 3333 //aqui estou criando a porta

//aqui estou inicando a lista incial de mulheres
const mulheres = [
    {
        id:'1'
        nome: 'Tais Araujo',
        imagem: 'tais_araujo.jfif',
        miniboi: 'Atriz e Apresentadora'
    },
    {
        id:'2'
        nome: 'Drik Barbosa',
        Imagem:'https://www.google.com/imgres?q=drik%20barbosa&imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2FgAhakjNkFGvQLY-pWRH8_5ACIpTn5Op9FGggV-LHfzN1r4QJjad8hnRyKVuoCE248AHf3aQr%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fm.youtube.com%2Fuser%2Fdrikbarbosa&docid=VX2cUleQw29c0M&tbnid=3oo-32rg7l9l6M&vet=12ahUKEwimscfO1omJAxVzrJUCHSGjOqwQM3oECB0QAA..i&w=900&h=900&hcb=2&ved=2ahUKEwimscfO1omJAxVzrJUCHSGjOqwQM3oECB0QAA',
        minibio: 'Cantora e Compositora'
    },
    {
        id:'3'
        nome: 'Karol de Souza',
        imagem: 'https://www.google.com/imgres?q=Karol%20de%20solza&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1567713333062549510%2F5TCeBEbE_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fakaroldesouza&docid=Y7YtWv5azBp9rM&tbnid=bqAsBf-IzGpwRM&vet=12ahUKEwjKseL21omJAxUqrJUCHUshAm0QM3oECBsQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwjKseL21omJAxUqrJUCHUshAm0QM3oECBsQAA',
        minibio: 'Cantora e Compositora'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id:'',
        nome:'',
        imagem:'',
        minibio:''
    }
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta