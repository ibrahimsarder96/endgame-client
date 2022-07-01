import React from 'react';

const TodoList = ({task}) => {
  const {work} = task;
  return (
    <div class="alert alert-warning shadow-lg mt-5">
       <span className='text-pink-400 text-3xl font-bold md:text-center'>{work}</span>
      <div class="form-control">
     <label class="cursor-pointer label">
    <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
  </label>
</div>
  </div>
  );
};

export default TodoList;