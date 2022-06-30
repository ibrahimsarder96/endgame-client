import { isWithinInterval } from 'date-fns';
import React, { useState } from 'react';
import {  ClassNames, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import styles from 'react-day-picker/dist/style.module.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const classNames: ClassNames = {
    ...styles,
    head: 'custom-head'
  };
  return (
      <div className='w-100 grid justify-items-center items-center mt-28'>
          <style>{`.custom-head { color: yellow }`}</style>
      <DayPicker
         styles={{
          caption: { color: 'red' },
          li: {color: 'white'}
        }}
       mode="single"
       classNames={classNames}
       selected={date}
       onSelect={setDate}
      ></DayPicker>
         <p className='text-white text-2xl'>You selected <span className='text-amber-400'>{format(date, 'PP')}</span>.</p>
    </div>
  );
};

export default Calendar;