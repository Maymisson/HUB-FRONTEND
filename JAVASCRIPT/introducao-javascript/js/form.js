var botaoAdicionar = document.querySelector("#adicionar-paciente")
// -- Função anonima 
botaoAdicionar.addEventListener("click", function (event){
    // -- metodo que previne o comportamento padrão do evento
    event.preventDefault();
  
    // -- capturando dados de inputs através do querySelector()
    var form = document.querySelector("#form-add");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //console.log(nome);
    //console.log(peso);
    //console.log(altura);
    //console.log(gordura);


    // -- Criando elemento do HTML dentro do JS
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // -- Passando o valor extraido do <form.nome.value;>
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // -- passando appendChild para definir filhos
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //console.log(pacienteTr);

    // -- passando o elemento criado no JS para o HTML
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); 
});
    //console.log(paciente); //tr
    //console.log(tdPeso);  //td que tem o peso
    //console.log(peso);  // obter 0 valor