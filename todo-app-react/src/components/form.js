import React from "react";

const Form = ({setStatus,setInputText,inputText, todos, setTodos}) => {
    const inputTextHandler=(e)=> {
        setInputText(e.target.value);
    };
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        console.log(e)
        setTodos([
            ...todos, 
            {
                text: inputText, 
                completed: false,
                id:Math.random()*1000
            }]);
            setInputText("");
    };
const statusHandler=(e)=>{
    console.log(e.target.value);
    setStatus(e.target.value);
}
    return (
        <form>
            <input value= {inputText} onChange={inputTextHandler}type="text" className="todo-input" />
            <button class="todo-button" type="submit" onClick={submitTodoHandler}>
                <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select onChange={statusHandler}name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
