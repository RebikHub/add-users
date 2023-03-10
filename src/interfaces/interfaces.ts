export interface IUser {
  id?: string;
  username: string;
  email: string;
  age: string;
  country: string;
};

export interface IContext {
  users: IUser[];
  addUser: (user: IUser) => void;
  hiddenForm: () => void;
  removeUser: (id: string) => void;
  editUserId: (id: string) => void;
};