import React, { useState } from 'react';
import useInput from './useInput';

const CustomHookUserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = e => {
    e.preventDefault();
    alert(`hello ${firstName} & ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <h1>Custom Hook</h1>
      <form onSubmit={submitHandler}>
        <div className=''>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' {...bindFirstName} />
        </div>
        <div className=''>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' {...bindLastName} />
        </div>
        <button className='btn btn-primary'>Change</button>
      </form>
    </div>
  );
};

export default CustomHookUserForm;
