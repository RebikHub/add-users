import React, { useEffect, useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import User from './User';

export default function ListUsers() {
  const [list, setList] = useState<IUser[]>([]);
  const [error, setError] = useState<any>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка - ${res.status}`);
        };
        return res.json();
      })
      .then((users) => setList(users))
      .catch((e) => setError(e.message))
  }, []);

  if (error) {
    return <div>{error}</div>
  }
  
  return (
    <div>
      <ul>
        {list.map((e) => <User item={e} key={e.id}/>)}
      </ul>
    </div>
  );
};
