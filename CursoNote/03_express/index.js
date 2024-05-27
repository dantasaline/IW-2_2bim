const express = require ("express")
const app = express()

app.get('/',function(req,res){
    res.send('Bem vindo')
})

app.get('/blog',function(req,res){
    res.send('Essa é a pag do blog')
})

app.get(404,function(req,res){
    res.send('Erro')
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá seu nome é: ' + req.params.nome + '        Sua idade: '+req.params.idade)
    // res.send('Sua idade é: ' + req.params.idade)
    // res.send(req.params)
})

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
})