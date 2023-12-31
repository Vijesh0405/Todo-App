import {createContext,useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        //* below object is for demo purpose ,taki hume pta rahe kis tarah ka data store kr rahe hai
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider