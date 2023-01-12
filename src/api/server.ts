import { IUser } from "../interfaces/interfaces";

const url = 'http://localhost:4000/users';

export function fetchAdd(user: IUser) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};

export function fetchEdit(user: IUser) {
  fetch(`${url}/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      age: user.age,
      country: user.country
    })
  });
};

export function fetchRemove(id: string) {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
};