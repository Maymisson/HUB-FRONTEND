var titulo = document.querySelector("h1");
//console.log(titulo);
//console.log(titulo.textContent);

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < 5; i++) {
    //console.log(paciente[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValidado = true;
    var alturaValidado = true;

    if (peso <= 0 || peso > 300) {
        //console.log("Peso inválido"); 
        pesoValidado = false;
        //tdImc.textContent = "Peso inválido!"; 
    }

    if (altura <= 0 || altura > 3) {
        //console.log("Altura inválida");
        alturaValidado = false;
        //tdImc.textContent = "Altura inválida!";
    }

    if (pesoValidado && alturaValidado) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Peso e/ou altura inválidos!";
    }
}




    // -- Fazendo um loop para replicação do resultado para cada campo do IMC




    //console.log(imc);

    //console.log(paciente); //tr
    //console.log(tdPeso);  //td que tem o peso
    //console.log(peso);  // obter 0 valor