import React from 'react';

const TodoList = ({task}) => {
  const {work} = task;
  return (
    <div className="alert alert-warning shadow-lg mt-5">
       <span className='text-pink-400 text-3xl font-bold md:text-center'>{work}</span>
      <div className="form-control">
     <label className="cursor-pointer label">
    <input type="checkbox" checked="checked" className="checkbox checkbox-secondary" />
  </label>
</div>
  </div>
  );
};

export default TodoList;