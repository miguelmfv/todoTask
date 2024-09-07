document.getElementById('formTarefa').addEventListener('submit', function(e){
    e.preventDefault();
    const tarefa = document.getElementById('entradaTarefa').value;
    if (tarefa.trim() !== ''){
        const novaTarefa = document.createElement('li');

        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = tarefa;
        novaTarefa.appendChild(textoTarefa);

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');
        checkBox.addEventListener('click', function(){
            novaTarefa.classList.toggle('tarefa-concluida');
        });
        novaTarefa.appendChild(checkBox);


        const buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Editar';
        buttonEdit.classList.add('edit');
        buttonEdit.addEventListener('click', function(){
            const info = prompt('Informe o que deseja editar: ');
            novaTarefa.firstChild.textContent = info;
        });
        novaTarefa.appendChild(buttonEdit);


        const buttonDel = document.createElement('button');
        buttonDel.textContent = 'Apagar';
        buttonDel.classList.add('del');
        buttonDel.addEventListener('click', function(){
            const confirmar = confirm('Voce deseja realmente apagar?');
            if (confirmar == true){
                novaTarefa.remove();
            }
        });
        novaTarefa.appendChild(buttonDel);


        document.getElementById('listaTarefas').appendChild(novaTarefa);
        document.getElementById('entradaTarefa').value = '';
    }
})