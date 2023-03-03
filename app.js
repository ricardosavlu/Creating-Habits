const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form) // essa variavel é para iniciar a biblioteca
const button = document.querySelector(".button-mais")

button.addEventListener('click', add)
form.addEventListener('change', save) // esse evento change é quando qualquer coisa muda na pagina. adicionamos um dia isso foi uma mudança na pagina. ai vou pedir uma função para cada vez que a pagina tiver alguma alteração, no caso um incremento de data, salvar as alterações

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)// o new date() faz parte da biblioteca do JS para criar uma nova data. o toLocaleDate é uma função para saber onde voce está e qual o dia. E o slice é pq a biblioteca da nlw so aceita se a data for com dia e mes. entao estou cortando o ano.
    const dayExists = nlwSetup.dayExists(today)  //dayExist é uma função da biblioteca para retornar se é true ou false se o dia ja foi colocado.
   
    if(dayExists){
        alert('dia já incluso')
        return
    }
    
    alert("dia adicionado com sucesso ✅")

     nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //estou armazenando o os arquivos que estao dentro do nlwSetup.data(que faz parte da biblioteca do rocker seat) na memória local.
}



const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)//aqui estou levando pro nlwSetup as informaçoes que estão dentro do objeto "data"
nlwSetup.load() //isso é para inicializar o setData. 