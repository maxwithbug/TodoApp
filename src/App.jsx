import { bindActionCreators } from "redux";
import { useDispatch } from 'react-redux';

import AddTodo from '../AddTodo/AddTodo.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import { addTodo, editTodo, deleteTodo, finishTodo } from "../slices/TodoSlice.js";

function App() {

  const dispatch = useDispatch();
    const actions = bindActionCreators({ addTodo, editTodo, deleteTodo, finishTodo }, dispatch);


  return (
    <>
      <div className='text-3xl w-full flex items-center justify-center mt-[100px] text-yellow-500 font-mono'>Todo List</div>
      <AddTodo addtodo={actions.addTodo} />
      <TodoList todofinish={actions.finishTodo} todoedit={actions.editTodo} tododelete={actions.deleteTodo} />
      
    </>
  )
}

export default App
