//-- criando variavel para manipular o elemento que pussui a classe CSS
var titulo = document.querySelector("h1");

// -- Fazendo um loop para replicação do resultado para cada campo do IMC --

//-- criando variavel para manipular todos os elementos que pussui a classe CSS (.paciente) retornando array
var pacientes = document.querySelectorAll(".paciente");

// -- loop for percorrendo o tamanho de uma array (pacientes.length)
for (var i = 0; i < pacientes.length; i++) {

    // -- Fazendo com que a variavel percorra um item por vez da array (var = var[i])  
    var paciente = pacientes[i];

    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;


    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // - criando variaveis booleanas para a condição
    var pesoValidado = true;
    var alturaValidado = true;

    // -- Estrutura de condição e operadores logicos

    if (peso <= 0 || peso > 300) {
        console.log("Peso inválido"); 
        pesoValidado = false;
        tdImc.textContent = "Peso inválido!"; //-- mensagem individual para peso inválido
        paciente.style.backgroundColor = "lightcoral";
    }

    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida");
        alturaValidado = false;
        tdImc.textContent = "Altura inválida!"; //-- mensagem individual para altura inválido
        paciente.style.backgroundColor = "lightcoral";
    }

    if (pesoValidado && alturaValidado) {
        //-- criando variavel e realizando calculos
        var imc = peso / (altura * altura);
        //usando limitado (toFixed) decimal para float
        tdImc.textContent = imc.toFixed(2);
    } //else {
        //tdImc.textContent = "Peso e/ou altura inválidos!"; //-- mensagem para generalizar quando uma das condições forem invalidas
        //paciente.style.backgroundColor = "lightcoral";
    //}
}


    //console.log(paciente); //tr
    //console.log(tdPeso);  //td que tem o peso
    //console.log(peso);  // obter 0 valor