function createTaskLi(value){
    const li = document.createElement('li');
    const textNodeLi = document.createTextNode(value);
    li.appendChild(textNodeLi);

    return li;
}

window.onload = function(){
    const taskContainer = document.querySelector('.taskContainer');
    const form = document.querySelector('form');
    const inputTask = document.querySelector('input[name="task"]');
    const dateTask = document.querySelector('input[name="dateTask"]');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const valueTask = inputTask.value;
        const valueDateTask = dateTask.value;
        const taskli = createTaskLi(`${valueTask} ${valueDateTask}`);
        
        taskContainer.appendChild(taskli);
    });
}