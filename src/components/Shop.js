import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const items = await data.json();

    setItems(items);
  };

  return (
    <div className='row'>
      <h1 className='my-3'>Shop Page</h1>

      <div className='card'>
        {items.map(item => (
          <div className='card-body' key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <h2 className='card-title'>{item.title}</h2>
              <p>{item.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
