let todoForm = document.querySelector(".todo-form form");
let htmlBody = document.querySelector(".todo-table table tbody");

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
   
    let todoTitle = todoForm.todoname.value;

    addTodoItem(todoTitle);  
    
    todoForm.todoname.value = '';
});

htmlBody.addEventListener('click', function(e){
    if(e.target.getAttribute('type')=='checkbox'){
        let tr = e.target.parentNode.parentNode;
        if(e.target.checked){
         tr.classlist.add('complete');
        }else{
            tr.classlist.remove('complete');
        }
    }   
});




function addTodoItem(title){
    let htmlContent = <tr>
                           <td><input type="checkbox" name="" id=""></td>
                           <td>Pack toiletry bag</td>
                           <td>Pending</td>
                        </tr>
                        
    htmlBody.innerHTML += htmlContent;
}
