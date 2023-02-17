import { useState,useRef } from "react"
export function useTodos (){
    const cartInitialState = JSON.parse(window.localStorage.getItem('todos'))||[]
  const [todo, setTodo] = useState(cartInitialState)
  const [input,setInput] = useState('')
  const [error,setError] = useState(null)
  const previousInput = useRef(input)
  const updatLocalStorage = state =>{
    window.localStorage.setItem('todos',JSON.stringify(state))
  }
  
    
    return {todo,setTodo, input,setInput,error,setError,updatLocalStorage,previousInput}
}