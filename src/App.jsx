import { useEffect } from 'react';
import './App.css'
import { TodoProvider } from './contexts';

function App() {

  const [todos,settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prevTodos) => [{id:Date.now(), ...todo}, ...prevTodos]);
  }

  const updateTodo = (id, todo) =>{
    settodos((prevTodos) => prevTodos.map((ptodo) => (ptodo.id===id ? todo : ptodo)));
  }

  const deleteTodo = (id) =>{
    settodos((prevTodos) => prevTodos.filter((ptodo) => (ptodo.id!==id)));
  }

  const toggleComplete = (id) =>{
    settodos((prevTodos) => prevTodos.map((ptodo) => (ptodo.id===id ?  {...ptodo,completed: !ptodo.completed}: ptodo)));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    
    if (todos && todos.length > 0) {
      settodos(todos);
    }

  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
