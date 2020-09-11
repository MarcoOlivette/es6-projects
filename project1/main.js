class List{
    constructor(){
        this.todos = new Array();
    }
    add(data){
        this.data.push(data);
        console.log(data)
    }
}

class TodoList extends List{
    constructor(){
        super();
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

var button = document.querySelector('button#btn');
var todoList = new TodoList();

button.onclick = todoList.add('teta');