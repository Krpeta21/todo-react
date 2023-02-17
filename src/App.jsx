import './App.css'
import { TodoCard } from './components/todo-card'
import { useTodos } from './hooks/useTodos'

function App() {
  
  const {todo,setTodo, input,setInput,error,setError,updatLocalStorage,previousInput} = useTodos()

  
  const handleSubmit = (event) =>{
    event.preventDefault()
    if(input == '') return
    if(input == previousInput.current) {
      setError('Misma tarea')
      return}
    addTodo(input)
    previousInput.current = input
    setError()  
  }
  const handleChange = (event) => {
    const newTodo = event.target.value
    setInput(newTodo)   
  }    
  const addTodo = text =>{
    const newTodos = [...todo,{text}]
    setTodo(newTodos)
    updatLocalStorage(newTodos)
  }
  const handleClear = () =>{
    updatLocalStorage([])
    setTodo([])
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={input} type="text" placeholder="Make dinner, Do Exercise, Code..."/>
        <button>Create!</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {
        todo.map((lista,index) => (
          <TodoCard key={index} todo={lista.text} />
        ))
      }
      <div className='btnclass'>
      <button onClick={handleClear}>Clear Tasks!</button>
      </div>
     
    </div>
  )
}

export default App
