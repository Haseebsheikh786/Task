 import React, { useState, useEffect } from 'react';
import ListHeader from '../components/ListHeader';
import ListFooter from '../components/ListFooter';

const ListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');  
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <div>
      <ListHeader />
      <ul className="list">
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {loading && <ListFooter />}
    </div>
  );
};

export default ListPage;
