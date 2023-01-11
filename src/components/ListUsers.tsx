import React, { useContext, useEffect, useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import { HeaderTr, UsersTable } from '../styles/styles';
import { Context } from './App';
import User from './User';

export default function ListUsers() {
  const list = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    if (list?.users) {
      setUsers(list.users);
    };
  }, [list]);

  useEffect(() => {
    if (sort) {
      sorting(sort);
    };
  }, [sort]);

  function sorting(sortName: string) {
    switch (sortName) {
      case 'Username':
        setUsers((prev) => prev.sort((a, b) => {
          if (a.username > b.username) {
            return 1;
          }
          if (a.username < b.username) {
            return -1;
          }
          return 0;
        }))
      break;
      case 'Email':
        setUsers((prev) => prev.sort((a, b) => {
          if (a.email > b.email) {
            return 1;
          }
          if (a.email < b.email) {
            return -1;
          }
          return 0;
        }))
      break;
      case 'Age':
        setUsers((prev) => prev.sort((a, b) => a.age - b.age))
      break;
      case 'Country':
        setUsers((prev) => prev.sort((a, b) => {
          if (a.country > b.country) {
            return 1;
          }
          if (a.country < b.country) {
            return -1;
          }
          return 0;
        }))
      break;
    };
    setSort('');
  };
  
  return (
    <UsersTable>
      <tbody>
        <HeaderTr>
          <td onClick={() => setSort('Username')}>Username</td>
          <td onClick={() => setSort('Email')}>Email</td>
          <td onClick={() => setSort('Age')}>Age</td>
          <td onClick={() => setSort('Country')}>Country</td>
          <td>Edit&Remove</td>
        </HeaderTr>
        {users.map((e) => <User item={e} key={e.id}/>)}
      </tbody>
    </UsersTable>
  );
};
