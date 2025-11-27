function fnCadastrar(){
    //criar variáveis
    let nome="", idade=0
    //pegar o conteudo digitado nos campos
    nome = document.getElementById("nome").value
    idade = document.getElementById("idade").value
    //mostrar com uma mensagem amigáveil as informações
    document.getElementById("resultado").innerText = `Olá, seu nome é ${nome} e sua idade é ${idade}`
    //limpar os campos
    document.getElementById("nome").value = ""
}