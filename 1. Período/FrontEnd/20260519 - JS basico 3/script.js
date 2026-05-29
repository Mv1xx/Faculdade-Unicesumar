function bemVindo(){
    const name = document.getElementById("nome").value
    const texto = document.getElementById("texto")

    if (name == ""){
        texto.innerHTML = '<span style="color:red">Digite seu nome!</span>'
        return
    }
// transforma tags em texto normal...
    texto.innerText = `Olá, ${name}, seja bem vindo!`  

}

// Exercicio 02
function cores(){
    const texto02 = document.getElementById('texto02')
    const botao02 = document.getElementById('troca-estilo')

    // o texto do botao é Troca Estilo?
    if (botao02.innerText == "Troca Estilo"){
        texto02.style.color = 'blue'
        texto02.style.backgroundColor = 'yellow'
        texto02.style.fontSize = '30px'
        botao02.innerText = "Retorna Estilo"
    }else{
        texto02.style.color = ''
        texto02.style.backgroundColor = ''
        texto02.style.fontSize = ''
        botao02.innerText = ''
    }

}

// Exercicio 03
function corPagina(cor){
    document.body.style.backgroundColor = cor
}

// Exercicio 04
function addParagrafo(){
    let div, novoParagrafo
    div = document.getElementById("conteudo")
    novoParagrafo = document.createElement("p")
    novoParagrafo.innerText = "Paragrafo Adicionado via JS"
    div.appendChild(novoParagrafo)

}
function removerParagrafo(){
    let div, ultimoParagrafo
    div = document.getElementById("conteudo")
    ultimoParagrafo = div.lastElementChild //ultimo elemento add em div

    //se existir ultimo paragrafo -> remove
    if(ultimoParagrafo){
        div.removeChild(ultimoParagrafo)
    } else {
        alert("Não há mais paragrafos para serem removidos!")
    }
}

// Exercicio 05
function mostrar(){
    const img = document.getElementById('imagem')

    img.style.display = 'block'
}
function esconder(){
    const img = document.getElementById('imagem')
    img.style.display = 'none'
}

// Exercicio 06
function trocaimg(){
    const img = document.getElementById('imagem06')
    const assunto = document.getElementById("assunto").value

    switch(assunto){
        case "gato":
            img.src = "./img/gato.jpg"
            break
        case "cachorro":
            img.src = "./img/cachorro.jpg"
            break
        case "rato":
            img.src = "./img/rato.jpg"
            break
        default:
            img.src = ""
    }
}
