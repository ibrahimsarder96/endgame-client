import React from 'react';
import { useQuery } from 'react-query';
import CompletedTask from './CompletedTask';


const Completed = () => {
 
  const {data: works, isLoading} = useQuery('work', () => fetch('https://arctic-smarties-47740.herokuapp.com/work')
  .then(res => res.json()))

  if(isLoading){
    return
  }

  return (
    <div className='my-5 px-10'>
      {
        works.map(task => <CompletedTask
        task={task}
        ></CompletedTask>)
      }
    </div>
  );
};

export default Completed;