const PAISES = [{
    pais :"Estados Uninos",
    flag : "us",
    flag_url: "https://www.worldometers.info/img/flags/us-flag.gif",
    id: 1,
    ouro: 37,
    prata: 46,
    bronze: 29
},
{
pais :"Brasil",
flag : "br",
flag_url: "https://www.worldometers.info/img/flags/br-flag.gif",
id: 1,
ouro: 79,
prata: 46,
bronze: 29
},
{
pais :"China",
flag : "ch",
flag_url: "https://www.worldometers.info/img/flags/ch-flag.gif",
id: 1,
ouro: 67,
prata: 46,
bronze: 29
},
{
pais :"França",
flag : "fr",
flag_url: "https://www.worldometers.info/img/flags/fr-flag.gif",
id: 1,
ouro: 35,
prata: 53,
bronze: 32
},
{
pais :"Italia",
flag : "it",
flag_url: "https://www.worldometers.info/img/flags/it-flag.gif",
id: 1,
ouro: 54,
prata: 36,
bronze: 39
},
{
pais :"Russia",
flag : "rs",
flag_url: "https://www.worldometers.info/img/flags/rs-flag.gif",
id: 1,
ouro: 68,
prata: 46,
bronze: 29
},
{
pais :"Paraguai",
flag : "pr",
flag_url: "https://www.worldometers.info/img/flags/pa-flag.gif",
id: 1,
ouro: 23,
prata: 26,
bronze: 19
},
{
pais :"Africa",
flag : "ur",
flag_url: "https://www.worldometers.info/img/flags/af-flag.gif",
id: 1,
ouro: 21,
prata: 16,
bronze: 29
},

{
pais :"México",
flag : "ag",
flag_url: "https://www.worldometers.info/img/flags/mx-flag.gif",
id: 1,
ouro: 34,
prata: 23,
bronze: 20
}]
let = quadroMedalhas = document.querySelector(".quadro-medalhas") 
function criarTemplateLinha(i,pais,flag_url,ouro,prata,bronze){
//CRIANDO LINHA DO QUADRO
let linha = document.createElement("div")
//ADICIONANDO CLASSE PARA A DIV LINHA
linha.classList.add("linha")

//COLUNA RANK
let coluna_rank = criarColuna_rank(i+1+"ª")
 //COLUNA PAIS
 let coluna_pais = criarColuna_pais(pais,flag_url)
 //MEDALHA DE OURO
 let medalha_ouro = criarMedalha_ouro(ouro)
 //MEDALHA DE OURO
 let medalha_prata= criarMedalha_prata(prata)
 //MEDALHA DE BRONZE
 let medalha_bronze = criarMedalha_bronze(bronze)
 //TOTAL
 let total_medal = ouro + prata + bronze
 let coluna_total = criarTotal(total_medal)

linha.appendChild(coluna_rank)
linha.appendChild(coluna_pais)
linha.appendChild(medalha_ouro)
linha.appendChild(medalha_prata)
linha.appendChild(medalha_bronze)
linha.appendChild(coluna_total)
quadroMedalhas.appendChild(linha)

console.log(quadroMedalhas)

}
function tratarPaises(){
let paisesOrdenados = ordenarPaises(PAISES)
for (let i = 0; i < paisesOrdenados.length; i++) {
    const PAIS = paisesOrdenados[i];
    criarTemplateLinha(i,PAIS.pais,PAIS.flag_url,PAIS.ouro,PAIS.prata,PAIS.bronze)
    
}
}
tratarPaises()
function ordenarPaises(PAISES){
let newPAISES = PAISES.map(somarTotal).sort((a,b) => b.ouro - a.ouro)
return newPAISES
}
function somarTotal(pais){
    return pais
}


//FUNÇÃO DE CRIAR COLUNA RANK 
function criarColuna_rank(rank){
//1 COLUNA - RANK
let coluna_rank = document.createElement("div")
coluna_rank.classList.add("coluna" , "coluna-rank")

//CRIANDO SPAN TITULO RANK
let coluna_rank_titulo = document.createElement("span")
coluna_rank_titulo.innerText = rank
coluna_rank.appendChild(coluna_rank_titulo)
return coluna_rank
}
//CRIANDO A COLUNA PAIS
function criarColuna_pais(pais,flag_url){
//2 COLUNA - PAIS
let coluna_pais = document.createElement("div")
coluna_pais.classList.add("coluna" , "coluna-paises")

//CRIANDO SPAN TITULO PAIS
let coluna_pais_titulo = document.createElement("span")
coluna_pais_titulo.innerText = pais

//CRIANDO IMAGEM DO PAIS
let coluna_pais_imagem = document.createElement("img")
coluna_pais_imagem.src= flag_url
coluna_pais_imagem.alt = pais
coluna_pais.appendChild(coluna_pais_imagem)
coluna_pais.appendChild(coluna_pais_titulo)

return coluna_pais
}
//FUNÇÃO DE CRIAR COLUNA MEDALHA OURO
function criarMedalha_ouro(ouro){
//1 COLUNA - ouro
let medalha_ouro = document.createElement("div")
medalha_ouro.classList.add("coluna" , "medalha_ouro")

//CRIANDO SPAN TITULO Ouro
let medalha_ouro_titulo = document.createElement("span")
medalha_ouro_titulo.innerText = ouro
medalha_ouro.appendChild(medalha_ouro_titulo)
return medalha_ouro
}
//FUNÇÃO DE CRIAR COLUNA MEDALHA PRATA
function criarMedalha_prata(prata){
//1 COLUNA - PRATA
let medalha_prata = document.createElement("div")
medalha_prata.classList.add("coluna" , "medalha_prata")

//CRIANDO SPAN TITULO PRATA
let medalha_prata_titulo = document.createElement("span")
medalha_prata_titulo.innerText = prata
medalha_prata.appendChild(medalha_prata_titulo)
return medalha_prata
}
//FUNÇÃO DE CRIAR COLUNA MEDALHA BRONZE
function criarMedalha_bronze(bronze){
//1 COLUNA - bronze
let medalha_bronze = document.createElement("div")
medalha_bronze.classList.add("coluna" , "medalha_bronze")

//CRIANDO SPAN TITULO bronze
let medalha_bronze_titulo = document.createElement("span")
medalha_bronze_titulo.innerText = bronze
medalha_bronze.appendChild(medalha_bronze_titulo)
return medalha_bronze
}
//FUNÇÃO DE CRIAR COLUNA TOTAL
function criarTotal(total){
//1 COLUNA - total
let coluna_total = document.createElement("div")
coluna_total.classList.add("coluna" , "coluna_total")

//CRIANDO SPAN TITULO total
let coluna_total_titulo = document.createElement("span")
coluna_total_titulo.innerText = total
coluna_total.appendChild(coluna_total_titulo)
return coluna_total
}