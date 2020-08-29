import React from 'react';

const ChildComponent = props => {
  console.log(props);
  return (
    <div>
      <input type='text' placeholder='Update Your Name' onChange={event => props.onChange(event.target.value)} />
    </div>
  );
};

export default ChildComponent;
