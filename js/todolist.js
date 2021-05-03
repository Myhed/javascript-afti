
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

window.onload = function(){
    let inputTaskDom;
    let inputDateTask;
    initTodoList(function({form, taskContainer}){
        inputTaskDom = document.querySelector('input[name="task"]');
        inputDateTask = document.querySelector('input[name="dateTask"]');
        form.addEventListener('submit', function(event){
            event.preventDefault();
            console.log(inputTaskDom.value);
            console.log(inputDateTask.value);
            const date = new Date(inputDateTask.value);
        });
    });
}