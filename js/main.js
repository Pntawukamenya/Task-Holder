let todoForm = document.querySelector(".todo-form form");
let HtmlBody = document.querySelector("todo-table table tbody");

todoForm.addEventListener("submit", function(e){
    e.preventDefault();

    let todoTitle = todoForm.todoname.value;

    addTodoItem(todoTitle);

    todoForm.todoname.value = "";
});

htmlBody.addEventListener('click', function(e){
    if(e.target.getAttribute('type')=='checkbox'){
        let tr =e.target.parentNode.parentNode;
        if(e.target.checked){
            tr.classList.add('complete');
        }else{
            tr.classList.remove('complete');
        }
    }
});






function addTodoItem(Title){
    let htmlContent = `<tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>${title}</td>
                        <td>Pending</td>
                    </tr>`;

    htmlBody.innerHTML += htmlContent;
};