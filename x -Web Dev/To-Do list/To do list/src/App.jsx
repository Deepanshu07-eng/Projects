import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import { CiSaveDown2 } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)



  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  
  const saveToLS = (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))

  }
  const toggleFinished=(e) => {
    setshowFinished(!showFinished)
  }
  
  


  const handleEdit=(e,id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
     let newTodos =todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  
  }

  const handleDelete=(e,id)=>{
    let newTodos =todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
    

  }

  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(),todo, iscompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox=(e)=>{
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos =[...todos];
    newTodos[index].iscompleted= !newTodos[index].iscompleted
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
    <Navbar/>
    <div className='md:container mx-auto my-5 bg-purple-200 rounded-2xl p-5 min-h-[80vh] md:w-1/2'>
      <div className="addtodo my-5 flex flex-col gap-y-5">
        <h1 className="font-bold text-xl text-center">"Plan Smart. Achieve More."</h1>
        <h1 className="text-xl font-bold text-center">Add a Todo</h1>
        <input onChange={handleChange} value={todo} type="text" className='w-full h-10 bg-white rounded-4xl p-5 py-8 text-2xl' placeholder="   What needs to be done?"/>
        <button onClick={handleAdd} disabled={todo.length<=3}className="bg-purple-800 hover:bg-purple-900 p-3 py-1 rounded-md text-white font-bold ml-15 mr-15 py-3">Save
</button> 
      </div>
      <input className=' font-bold my-5 text-xl' onChange={toggleFinished} type="checkbox" checked={showFinished}/>Show Finished
        <h2 className='text-xl font-bold my-5'>Your Todos</h2>
        <div className="todos">
          {todos.length===0 &&<div className='m-5 text-center my-10'>No Todos to display</div>}
          {todos.map(item=>{

            return (showFinished || !item.iscompleted)&& <div key={item.id} className="todo flex w-1/2 justify-between my-3">
              <div className="flex gap-5 text-xl">
              <input name={item.id} onChange={handleCheckbox}  type="checkbox" checked={item.iscompleted} id="" />
              <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className="bg-purple-800 hover:bg-purple-900 p-5 py-1 rounded-md text-white font-bold"><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-purple-800 hover:bg-purple-900 p-5 h-10 py-1 rounded-md  text-white font-bold ml-3" ><AiFillDelete /></button>
              </div>
            </div>
            })}
        </div >
    </div>
    </>
  )
}

export default App
