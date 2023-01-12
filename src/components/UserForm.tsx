import React, { useContext, useEffect, useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import { Button, Input } from '../styles/styles';
import { Context } from './App';
import Autocomplete from './Autocomplete';

type Props = {
  item: IUser | null
};

export default function UserForm({item}: Props) {
  const [user, setUser] = useState<IUser>({
    username: '',
    email: '',
    age: '',
    country: '',
  });
  const [error, setError] = useState<string>('');
  const [hidden, setHidden] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    if (item) {
      setUser(item)
    }
  }, [item]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 2 * 1000);
    };
  }, [error]);

  function addUserToStore() {
    if (user.username.trim() &&
      user.email.trim() &&
      user.age &&
      user.country.trim()) {
        context?.addUser(user);
        context?.hiddenForm();
        setUser({
          username: '',
          email: '',
          age: '',
          country: '',
        });
    } else {
      setError('Не хватает данных!');
    };
  };

  function choiceCountry(choice: string) {
    setUser({...user, country: choice});
    setHidden(false);
  };

  return (
    <form>
      <Input type="text" placeholder='Username'
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}/>
      <Input type="text" placeholder='Email'
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}/>
      <Input type="number" placeholder='Age'
        value={user.age}
        onChange={(e) => setUser({...user, age: e.target.value})}/>
      <Input type="text" placeholder='Country'
        value={user.country}
        onFocus={() => setHidden(true)}
        onChange={(e) => setUser({...user, country: e.target.value})}/>
      {hidden && user.country ? <Autocomplete country={user.country} choiceCountry={choiceCountry}/> : null}
      {error ? <h4>{error}</h4> : null}
      <Button type='button' onClick={addUserToStore}>{item ? 'Edit' : 'Add'}</Button>
    </form>
  );
};
