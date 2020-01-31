let botaoAdicionar = document.querySelector("#adicionar-paciente")
// -- Função anonima 
botaoAdicionar.addEventListener("click", function (event){
    // -- metodo que previne o comportamento padrão do evento
    event.preventDefault();
  
    // -- capturando dados de inputs do HTML através do querySelector()
    let form = document.querySelector("#form-add");
    // -- extraindo informações do paciente do form
    let paciente = obtemPacienteDoFormulario(form);
    //console.log(paciente);

    //-- Cria TR e TD do paciente
    let pacienteTr = montaTr(paciente);
    //console.log(pacienteTr);

    // -- passando o elemento criado no JS para o HTML - tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); 
});
    //console.log(paciente); //tr
    //console.log(tdPeso);  //td que tem o peso
    //console.log(peso);  // obter 0 valor


//-- refatorando o codigo em funções e criando objetos
function obtemPacienteDoFormulario(form){
    //-- criando objeto 
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value),
    }
    return paciente;
}

//-- criando função para montar a TR
function montaTr(paciente){
    //-- Criando elemento do HTML dentro do JS
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //-- criando TDs do paciente, passando nome da classe valores extraidos dentro do elemento criado TD
    let nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
    //-- Melhor legibilidade
    let pesoTd = montaTd(paciente.peso, "info-peso")
    let alturaTd = montaTd(paciente.altura, "info-altura")
    let gorduraTd = montaTd(paciente.gordura, "info-gordura")
    let imcTd = montaTd(paciente.imc, "info-imc")

    // -- passando appendChild para definir filhos
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

//-- criando função para code clean e deixar o codigo mais legivel
function montaTd (dado,classe){
    //--criando objeto TD
    let td =  document.createElement("td");
    //-- recebendo valor do td
    td.textContent = dado;
    //-- recebendo nome da classe
    td.classList.add(classe);

    return montaTd;
}