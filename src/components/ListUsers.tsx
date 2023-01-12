import React, { BaseSyntheticEvent, useContext, useEffect, useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import { HeaderTr, UsersTable } from '../styles/styles';
import { Context } from './App';
import User from './User';

export default function ListUsers() {
  const list = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (list?.users) {
      setUsers(list.users);
    };
  }, [list]);

  function sorting(ev: BaseSyntheticEvent) {
    const collator = new Intl.Collator('en');   
    switch (ev.currentTarget.outerText) {
      case 'Username':
        setUsers((prev) => [...prev.sort((a, b) => collator.compare(a.username, b.username))]);
      break;
      case 'Email':
        setUsers((prev) => [...prev.sort((a, b) => collator.compare(a.email, b.email))]);
      break;
      case 'Age':
        setUsers((prev) => [...prev.sort((a, b) => +a.age - +b.age)]);
      break;
      case 'Country':
        setUsers((prev) => [...prev.sort((a, b) => collator.compare(a.country, b.country))]);
      break;
    };
  };

  return (
    <UsersTable>
      <tbody>
        <HeaderTr>
          <td onClick={sorting}>Username</td>
          <td onClick={sorting}>Email</td>
          <td onClick={sorting}>Age</td>
          <td onClick={sorting}>Country</td>
          <td>Edit&Remove</td>
        </HeaderTr>
        {users.map((e) => <User item={e} key={e.id}/>)}
      </tbody>
    </UsersTable>
  );
};
