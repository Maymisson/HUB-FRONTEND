let campoFiltro = document.querySelector("#filtrar-tabela");
//-- escutando evento de digitação e criando função de captura
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    //-- comparando os nomes da tabela
    let pacientes = document.querySelectorAll(".paciente");
    //-- Condição de busca
    for(let i = 0; i < paciente.length; i++){
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = paciente.textContent;
    }
});