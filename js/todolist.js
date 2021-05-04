
function createElementH1(textH1){
    const h1 = document.createElement('h1');
    const h1NodeText = document.createTextNode(textH1);
    h1.appendChild(h1NodeText);
    return h1;
}

function createForm(done){
    const form = document.createElement('form');
    done(form);
    form.setAttribute('action', '#');
}

function createInput(attributs = {type: 'text', name:'', placeholder: ''}){
    const input = document.createElement('input');
    const keysAttributHtml = Object.keys(attributs);
    keysAttributHtml.forEach(key => {
        input.setAttribute(key, attributs[key]);
    });
    return input;
}

function createFormGroupDiv(done){
    formGroupDiv = document.createElement('div');
    done(formGroupDiv);
    formGroupDiv.classList.add('form-group');
}

function createTaskContainer(){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    return taskContainer;
}

function initForm(textButton,done){
  let inputTask;
  let inputDateTask;
  let buttonSubmit;
  createForm(function(createdForm){
      createFormGroupDiv(function(createdFormGroupDiv){
          inputTask = createInput({type: 'text', name:'task', placeholder: 'Register task'});
          inputDateTask = createInput({type: 'date', name:'dateTask'});
          createdFormGroupDiv.appendChild(inputTask);
          createdFormGroupDiv.appendChild(inputDateTask);
          createdForm.appendChild(createdFormGroupDiv);
      });
      buttonSubmit = document.createElement('button');
      buttonNodeText = document.createTextNode(textButton);
      buttonSubmit.appendChild(buttonNodeText);
      createdForm.appendChild(buttonSubmit);
      done(createdForm);
  });
}

function initTodoList(done){
    const body = document.body;
    const h1 = createElementH1('TodoList');
    const taskContainer = createTaskContainer();
    initForm('Enrgistrer une tâche',form => {
        console.log(form);
        body.appendChild(h1);
        body.appendChild(taskContainer);
        body.appendChild(form);
        done({form, taskContainer})
    });
}

function formatDate(date){
    const currentDate = new Date();

    const minutes = currentDate.getMinutes() > 9 ? currentDate.getMinutes() : '0' + currentDate.getMinutes();
    const hours = currentDate.getHours() > 9 ? currentDate.getHours() : '0' + currentDate.getHours();

    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    const month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();

    return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
}

function attachOnDeleteTask(deleteIcon){
    let childToDelete;
    let parentChildOnDelete;
    deleteIcon.addEventListener('click', (event) => {
        childToDelete = event.target.parentNode;
        parentChildOnDelete = event.target.parentNode.parentNode;
        parentChildOnDelete.removeChild(childToDelete);
    });
}

function taskContainerChild(taskText, dateText, done){
    const taskHtmlElement = document.createElement('span');
    const dateHtmlElement = document.createElement('span');
    const deleteTaskHtmlElement = document.createElement('span');
    attachOnDeleteTask(deleteTaskHtmlElement);
    done({taskHtmlElement,dateHtmlElement, deleteTaskHtmlElement});

    const taskTextNodeElement = document.createTextNode(taskText);
    const dateTextNodeElement = document.createTextNode(dateText);

    taskHtmlElement.classList.add('task');
    dateHtmlElement.classList.add('dateTask');
    deleteTaskHtmlElement.classList.add('deleteTask');

    dateHtmlElement.appendChild(dateTextNodeElement);
    taskHtmlElement.appendChild(taskTextNodeElement);
}

function verifyForm(inputs = {}, done){
    let errors = [];
    let values = [];
    Object.values(inputs).forEach(input => {
        if(input.value.trim() === ''){
            errors.push(`${input.name} ne doit pas être vide`);
        }
        values.push(input.value);
    });

    if(errors.length > 0){
        done(null, errors)
    }else{
        done(values, null);
    }
}

function handleErrors(errors){
    let errorHtmlElement;
    let errorTextNode;
    return errors.map(error => {
        errorHtmlElement = document.createElement('p');
        errorTextNode = document.createTextNode(error);
        errorHtmlElement.appendChild(errorTextNode);
        errorHtmlElement.classList.add('error');
        return errorHtmlElement;
    });
}

function displayErrors(errorsHtmlElement){
    const body = document.body;
    errorsHtmlElement.forEach(errorHtmlElement => {
        body.appendChild(errorHtmlElement);
        setTimeout(() => {
            body.removeChild(errorHtmlElement);
        }, 5000);
    });
}

window.onload = function(){
    let inputTaskDom;
    let inputDateTask;
    let formatDateTask;
    initTodoList(function({form, taskContainer}){
        inputTaskDom = document.querySelector('input[name="task"]');
        inputDateTask = document.querySelector('input[name="dateTask"]');
        form.addEventListener('submit', function(event){
            event.preventDefault();
            verifyForm({inputTaskDom, inputDateTask}, function(values, errors){
                if(errors){
                    console.log('errors: ',errors);
                    const errorsHtmlElement = handleErrors(errors);
                    displayErrors(errorsHtmlElement);
                    return;
                }
                const [valueTask, valueDateTask] = values;
                const date = new Date(valueDateTask);
                formatDateTask = formatDate(date);
                taskContainerChild(valueTask, formatDateTask, function({taskHtmlElement, dateHtmlElement, deleteTaskHtmlElement}){
                    const infoTask = document.createElement('div');
                    infoTask.classList.add('infoTask');
                    infoTask.appendChild(taskHtmlElement);
                    infoTask.appendChild(dateHtmlElement);
                    infoTask.appendChild(deleteTaskHtmlElement);
                    taskContainer.appendChild(infoTask);
                });
            });
        });
    });
}