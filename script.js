function adicionarTarefa(event){
    //parar o refrash da pagina
    event.preventDefault();

    let tarefa = document.getElementById('tarefa').value;

    if (tarefa.trim() !== '') {
        //Buscar o ID do input e da lista
        let lista = document.getElementById('lista-de-tarefas');

        //Funcionalidade de criar os itens da lista
        const li = document.createElement('li');

        //Definir valor da tarefa no item
        li.textContent = tarefa;

        // Adiciona um botão de remoção ao <li>
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', function() {

        // Remove o <li> pai quando o botão de remoção é clicado
        li.remove();
        });

        //Adicionar o <li> a lista
        li.appendChild(botaoRemover);
        lista.appendChild(li);
    }
}

//Obter o formulário pelo ID
let formulario = document.getElementById('meuFormulario')

// Adicionar o evento no submit do formulario
formulario.addEventListener('submit', (event) => {
    adicionarTarefa(event);
});