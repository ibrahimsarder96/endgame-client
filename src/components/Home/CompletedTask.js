import React from 'react';

const CompletedTask = ({task}) => {
  const {work} = task;
  return (
    <div className="alert alert-warning shadow-lg mt-5">
    <div>
      <span className='text-pink-400 text-3xl font-bold'>{work}</span>
    </div>
  </div>
  );
};

export default CompletedTask;