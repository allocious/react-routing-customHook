import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const Parent = () => {
  const [nameState, setnameState] = useState('');
  const marginTop = { margin: ' 50px ' };

  return (
    <div style={marginTop}>
      <h1>Hello there, {nameState} </h1>
      <ChildComponent onChange={value => setnameState(value)} />
    </div>
  );
};

export default Parent;
