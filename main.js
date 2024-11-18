$(document).ready(function() {

    //adicionar tarefa
    $('#botaoAdicionar').on('click', function () {  
        const tarefa = $('#adicionarTarefa').val();

        if (tarefa.length > 0) addTarefa(tarefa)    //somente coloca tarefas se tiver mais que 1 caracter
        
    });

    //para adicionar tarefa  em lista
    function addTarefa(text) {
        $('#listaTarefas').append('<li>' + text + '</li>');
    }

    //Marcar a tarefa como concluida
    $(document).on('click', 'li', function (){
        $(this).toggleClass('completa');
    })
})

