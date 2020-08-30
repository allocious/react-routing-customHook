import React, { useState, useEffect } from 'react';

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({ images: {} });

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div className='row'>
      <div className='card mt-4'>
        <div className='card-title'>
          <div className='p-3' key={item.id}>
            <b>{item.title}</b>
            <p>{item.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
