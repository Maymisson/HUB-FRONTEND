let tabela = document.querySelector("#tabela-pacientes");
//-- event como parametro para descobrir qual filho recebeu o evento
tabela.addEventListener("dblclick",function(event){
    //-- Add animação CSS no evento 
    event.target.parentNode.classList.add("fadeOut");
    
    //-- Tempo de um evento para o outro
    setTimeout(function() {
        //-- event.target quem sofreu propriamente o evento // -- parentNode para selecionarmos o pai de um elemento
        event.target.parentNode.remove();
    }, 500);

});