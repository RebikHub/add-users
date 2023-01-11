import React, { createContext, useState } from 'react';
import { IContext, IUser } from '../interfaces/interfaces';
import { AppDiv, Button } from '../styles/styles';
import { nanoid } from 'nanoid'
import ListUsers from './ListUsers';
import UserForm from './UserForm';

export const Context = createContext<IContext | null>(null);

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [btn, setBtn] = useState(false);
  const [editUser, setEditUser] = useState<IUser | null>(null);

  function addUser(user: IUser) {
    if (!user.id) {
      user.id = nanoid();
      setUsers([...users, user]);
    } else {
      const array = users.filter((e) => e.id !== user.id);
      setUsers([...array, user]);
      setEditUser(null);
    };
  };

  function hiddenForm() {
    setBtn(!btn);
  };

  function removeUser(id: string) {
    const array = users.filter((e) => e.id !== id);
    setUsers(array);
  };

  function editUserId(id: string) {
    users.forEach((e) => {
      if (e.id === id) {
        setEditUser(e);
        setBtn(!btn);
      };
    });
  };

  return (
    <Context.Provider value={{users, addUser, hiddenForm, removeUser, editUserId}}>
      <AppDiv>
        {!btn ? 
          <Button onClick={() => setBtn(!btn)}>Add new user</Button>
            : null}
        {btn ? <UserForm item={editUser}/> : null}
        <ListUsers/>
      </AppDiv>
    </Context.Provider>
  );
};
