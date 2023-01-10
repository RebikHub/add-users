import React from 'react';
import { IUser } from '../interfaces/interfaces';
import { UserLi } from '../styles/styles';

type Props = {
  item: IUser
};

export default function User({item}: Props) {
  return (
    <UserLi>
      <p>
        {item.username}
      </p>
      <p>
        {item.email}
      </p>
      <p>
        {item.phone}
      </p>
      <p>
        {item.website}
      </p>
    </UserLi>
  );
};
