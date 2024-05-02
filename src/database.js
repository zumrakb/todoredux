function createTodo(key, data) {
    const todo = localStorage.getItem(key);
    if(!todo) {
        const todoArray = [data];
        localStorage.setItem(key, JSON.stringify(todoArray));
    }else {
        const todoArray = JSON.parse(todo);
        todoArray.push(data);
        localStorage.setItem(key, JSON.stringify(todoArray));
    }
}

function getTodos(key) {
    const todos = localStorage.getItem(key);
    if(!todos) return [];
    return JSON.parse(todos);
}

function getTodoById(key, id) {
    const todos = localStorage.getItem(key);
    const todoArray = JSON.parse(todos);
    return todoArray[id];
}

function updateTodo(key, id, data) {
    const todo = localStorage.getItem(key);
    const todoArray = JSON.parse(todo);
    todoArray[id] = data;
    localStorage.setItem(key, JSON.stringify(todoArray));
}

function deleteTodoByID(key, id) {
    const todo = localStorage.getItem(key);
    const todoArray = JSON.parse(todo);
    todoArray.splice(id, 1);
    localStorage.setItem(key, JSON.stringify(todoArray));
}

export { createTodo, getTodos, getTodoById, updateTodo, deleteTodoByID }