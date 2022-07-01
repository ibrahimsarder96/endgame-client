import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import TodoList from './TodoList';


const Todo = () => {
 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async data => {
  
        const todo ={
          work: data.todo
        }
        fetch('http://localhost:5000/work', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(inserted => {
          if(inserted.insertedId){
            toast.success('day work added successfully')
            reset();
          }
          console.log('todo', inserted)
        })
  };
  const {data: works, isLoading} = useQuery('work', () => fetch('http://localhost:5000/work')
  .then(res => res.json()))

  if(isLoading){
    return
  }
  return (
   <div>
    <h1 className='text-center mt-5 text-3xl text-amber-400 font-bold'>Your Daily Task</h1>
     <div className='grid justify-items-center items-center my-12'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input 
      type="text" 
      name='todo' 
      placeholder="Todo list" 
      class="input input-bordered input-warning w-full max-w-xs text-xl text-white"
      {...register("todo", 
      { required: true }
      )} />
      <input className='btn btn-outline btn-warning mt-3' type="submit" value="Add"/>
      </form>
    </div>
    <div className='my-5 px-10'>
      {
         works.map(task => <TodoList
         task={task}
         ></TodoList>)
      }
    </div>
   </div>
  );
};

export default Todo;