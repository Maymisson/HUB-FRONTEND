//-- criando variavel para manipular o elemento que pussui a classe CSS
let titulo = document.querySelector(".titulo");

//-- criando variavel para manipular todos os elementos que pussui a classe CSS (.paciente) retornando array
let pacientes = document.querySelectorAll(".paciente");

// // -- Fazendo um loop para replicação do resultado para cada campo do IMC e percorrer o tamanho de uma array (pacientes.length)
for (let i = 0; i < pacientes.length; i++) {
    // -- Fazendo com que a variavel percorra um item por vez da array (let = let[i])  
    let paciente = pacientes[i];

    //-- capturando os valores que passaram na array para utilizar na estrutura de condição
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    // - criando variaveis booleanas para utilizar na estrutura de condição--------------------------------------//
    let pesoValidado = validaPeso(peso); //-- retorna se o peso é valido ou não 
    let alturaValidado = validaAltura(altura); //-- retorna se a altura é valida ou não
    //-----------------------------------------------------------------------------------------------------------//


    //-- Estrutura de condição e operadores logicos -------------------------------------------------------------//

    if (!pesoValidado) {
        console.log("Peso inválido"); 
        pesoValidado = false;
        tdImc.textContent = "Peso inválido!"; //-- mensagem individual para peso inválido
        //paciente.style.backgroundColor = "lightcoral";
        //usando a função classList para melhor manipulação do CSS
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValidado) {
        //console.log("Altura inválida");
        alturaValidado = false;
        tdImc.textContent = "Altura inválida!"; //-- mensagem individual para altura inválido
        //paciente.style.backgroundColor = "lightcoral";
        //usando a função classList para melhor manipulação do CSS -- .add como metodo de adicionar
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValidado && alturaValidado) {
        //-- criando variavel e realizando calculos
        let imc = calculaImc(peso,altura);
    } 
    //else {
        //tdImc.textContent = "Peso e/ou altura inválidos!"; //-- mensagem para generalizar quando uma das condições forem invalidas
        //paciente.style.backgroundColor = "lightcoral";
    //}
}
//--------------------------------------------------------------------------------------------------------------------------------//

//-- Função para validação de Peso e altura --------------------------------------------------------------------------------------//
function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}
//--------------------------------------------------------------------------------------------------------------------------------//

//-- criando funções para o calculo do IMC ---------------------------------------------------------------------------------------//
function calculaImc (peso,altura){
    let imc = 0;
    imc = peso / (altura * altura); 
     //usando limitado (toFixed) decimal para float
    return imc.toFixed(2);
}
//--------------------------------------------------------------------------------------------------------------------------------//