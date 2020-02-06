let campoFiltro = document.querySelector("#filtrar-tabela");
//-- escutando evento de digitação e criando função de captura
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    //-- comparando os nomes da tabela
    let pacientes = document.querySelectorAll(".paciente");
    //-- Condição de busca
    if (this.value.length > 0){
        //-- Acessando nome dos pacientes e também ao conteúdo de texto do filtro
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
    
            //-- Implementando lógica de filtragem
            if(nome != this.value){
                paciente.classList.add("invisivel")
            }else {
                paciente.classList.remove("invisivel");
            }
        }
        //-- apagando classe invisivel caso apague o texto do campo de busca
    } else {
        for (let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
    
});