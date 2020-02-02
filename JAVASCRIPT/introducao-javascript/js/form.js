//--------------------------------------- chamando funções -----------------------------------------//

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

    //-- Varável para receber a mensagem de erro
    let erro = validaPaciente(paciente);

    //-- Chamando função de validação do paciente e realizando teste para validar
    if (erro.length > 0) {
        let mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro; //-- exibe a msg da função
        return; //-- Sai imediatamente da função
    }

    // -- passando o elemento criado no JS para o HTML - adicionado paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    //-- limpando formulario ao add um paciente
    form.reset();

});
//---------------------------------------------------------------------------------------------------//

//----------------------------------- criando funções e objetos -------------------------------------//

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
    //let nomeTd = document.createElement("td");
    //nomeTd.classList.add("info-nome");
    //nomeTd.textContent = paciente.nome;
    
    //-- Melhor legibilidade
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//-- criando função para code clean e deixar o codigo mais legivel
function montaTd (dado, classe){
    //--criando objeto TD
    let td =  document.createElement("td");
    //-- recebendo valor do td
    td.textContent = dado;
    //-- recebendo nome da classe
    td.classList.add(classe);

    return td;
}

//------------------------------------------------------------------------------------------------------//

//-- Criando função para validação no Form e reaproveitando Funções ------------------------------------//
function validaPaciente(paciente){
    if (validaPeso(paciente.peso)){
        return "";
    } else {
        return "Peso Inválido !";
    }
}
//------------------------------------------------------------------------------------------------------//