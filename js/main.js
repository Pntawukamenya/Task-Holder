let todoForm = document.querySelector(".todo-form form");

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
   
    let todoTitle = todoForm.todoname.value;

    addTodoItem(todoTitle);  
    
    todoForm.todoname.value = '';
});



function addTodoItem(title){
    let htmlContent = <tr>
                           <td><input type="checkbox" name="" id=""></td>
                           <td>Pack toiletry bag</td>
                           <td>Pending</td>
                        </tr>
    let htmlBody = document.querySelector(".todo-table table tbody");

    htmlBody.innerHTML += htmlContent;
}
