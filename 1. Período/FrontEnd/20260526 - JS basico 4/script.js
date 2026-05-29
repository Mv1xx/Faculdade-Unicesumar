// Exercicio 01
const botao01 = document.getElementById("ex01")

botao01.addEventListener("click", () => {
    const name = document.getElementById("name").value
    const text01 = document.getElementById("bem-vindo")
    if (name != ""){
        text01.innerHTML = `Olá! ${name} seja bem vindo(a)`
    }else{
        text01.innerHTML = "<span style='color: red; font-size: 30px;'>Digite seu nome!</span>"
    }
})

// Exercicio 02
const botao02 = document.getElementById("ex02")
botao02.addEventListener("click", () =>{
    const text02 = document.getElementById("text02")

    if(botao02.innerText == "Alterar Estilo"){
        text02.style.color = 'blue'
        text02.style.background = 'yellow'
        text02.style.fontSize = '30px'
        botao02.innerText = "Estilo Original"
    } else {
        text02.style.color = ''
        text02.style.background = ''
        text02.style.fontSize = ''
        botao02.innerText = "Alterar Estilo"
    }
})

// Exercicio 03
const botoes = document.querySelectorAll(".tela") //Lista com todos os botoes (4 elementos)
for (let i = 0; i< botoes.length; i++){ //le qnt de botao
    botoes[i].addEventListener("click", function () { //add um evento em cada botao
        const cor = this.id //pega o objeto de agora
        document.body.style.backgroundColor = cor;
    }) 
}

// Exercicio 04
const botao04 = document.getElementById("ex04")
const botao042 = document.getElementById("ex042")
botao04.addEventListener("click", () => {
    const div = document.getElementById("div")
    const paragrafo = document.createElement("p")
    paragrafo.innerText = "Paragrafo adicionado"

    div.appendChild(paragrafo)

})

botao042.addEventListener("click", () => {
    const div = document.getElementById("div")
    const ultimoParagrafo = div.lastElementChild

    if(ultimoParagrafo){
        div.removeChild(ultimoParagrafo)
    }else{
        alert("Não há mais paragrafos!")
    }

})

// Exercicio 05
const exibirImg = document.getElementById("exibir-img")
const ocultarImg = document.getElementById("ocultar-img")

exibirImg.addEventListener("click", () => {
    const img = document.getElementById("img")

    img.style.display = "block"
})

ocultarImg.addEventListener("click", () => {
    const img = document.getElementById("img")
    img.style.display = "none"
})

// Exercicio 06
const seletor = document.getElementById("seletor")
seletor.addEventListener("change", () => {
    let figura = ""
    const valor = seletor.value
    const img = document.getElementById("img06")

    switch(valor){
        case "bota": 
            figura = "./imgs/bota.png"
            break
        case "picareta": 
            figura = "./imgs/picareta.jpg"
            break
        case "enxada":
            figura = "./imgs/enxada.png"
            break
        default:
            figura = ""
    }

    img.src = figura
})


// Exercicio 07
const div07 = document.getElementById("div07")
div07.addEventListener("mouseover", () => {
    div07.style.backgroundColor = "yellow"
})
div07.addEventListener("mouseleave", () => {
    div07.style.backgroundColor = "blue"
})

// Exercicio 08
const img08 = document.getElementById("img08")
const div08 = document.getElementById("div08")
const text08 = document.createElement("p")

text08.innerHTML = "<span style='background-color: blue; color: white;'>Isso é um urso</span>"

img08.addEventListener("mouseover", () => {
    div08.appendChild(text08)
})
img08.addEventListener("mouseleave", () => {
    div08.removeChild(text08)
})

// Exercicio 09
const enviar = document.getElementById("button09-enviar")
enviar.addEventListener("click", () => {
    const div09 = document.getElementById("div09")
    div09.style.display = 'block'

    let cont = 0
    const itens09 = document.getElementById("itens09").value
    const inserir = document.getElementById("button09-inserir")
    const lista09 = document.getElementById("lista09")
    inserir.addEventListener("click", () => {
        const text09 = document.getElementById("text09")
        if(cont < itens09){
            const li = document.createElement("li")
            li.innerText = text09.value
            lista09.appendChild(li)
            text09.value = ""
            cont += 1
        } else {
            const ultimoItem = lista09.lastChild
            ultimoItem.innerText = "Não é possivel add mais elementos!"
            ultimoItem.style.color = 'red'

        }
        
    })

    const apagar = document.getElementById("button09-apagar")
    apagar.addEventListener("click", () => {
        lista09.replaceChildren()
    })


})

// Exercicio 10
const celular = document.getElementById("celular")
const tablet = document.getElementById("tablet")
const notebook = document.getElementById("notebook")
const totalCompra = document.getElementById("total-compra")

const lista10 = document.getElementById("lista10")
const liCll = document.createElement("li")
let qntCll = 0
let qntTablet = 0
let qntNotebook = 0

let totalCll = 0
let totalTablet = 0
let totalNotebook = 0
celular.addEventListener("click", () => {
    liCll.innerText = `${qntCll += 1} Celular - ${totalCll += 3000}`
    
    lista10.appendChild(liCll)
    totalCompra.innerText = `R$${totalCll + totalTablet + totalNotebook}`
})

const liTablet = document.createElement("li")
tablet.addEventListener("click", () => {
    liTablet.innerText = `${qntTablet += 1} Tablet - ${totalTablet += 3000}`

    lista10.appendChild(liTablet)
    totalCompra.innerText = `R$${totalCll + totalTablet + totalNotebook}`
})

const liNotebook = document.createElement("li")
notebook.addEventListener("click" ,() => {
    liNotebook.innerText = `${qntNotebook += 1} Notebook - ${totalNotebook += 3000}`

    lista10.appendChild(liNotebook)
    totalCompra.innerText = `R$${totalCll + totalTablet + totalNotebook}`
})

