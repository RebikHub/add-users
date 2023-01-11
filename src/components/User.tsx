import React, { useContext } from 'react';
import { IUser } from '../interfaces/interfaces';
import { Button } from '../styles/styles';
import { Context } from './App';

type Props = {
  item: IUser
};

export default function User({item}: Props) {
  const context = useContext(Context);

  return (
    <tr>
      <td>
        {item.username}
      </td>
      <td>
        {item.email}
      </td>
      <td>
        {item.age}
      </td>
      <td>
        {item.country}
      </td>
      <td>
        <Button onClick={() => context?.editUserId(item.id!)}>Edit</Button>
        <Button onClick={() => context?.removeUser(item.id!)}>Remove</Button>
      </td>
    </tr>
  );
};
