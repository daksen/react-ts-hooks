import { useState } from 'react';

interface UserInterface {
  uid: string;
  name: string;
}

// const tempUser: UserInterface = {
//   uid: 'TEMP123',
//   name: 'TEMP USER'
// }

export const User = () => {

  const [user, setUser] = useState<UserInterface>();

  const login = ():void => {
    setUser({
      uid: 'ABC123',
      name: 'Test User',
    });
  }

  return (
    <div className="container border bg-light text-bg-light p-3 mt-2">
      <h4>User</h4>
      <button
        className="btn btn-outline-primary"
        onClick={() => login()}
      >
        Login
      </button>
      <button
        className="btn btn-outline-danger ms-2"
        onClick={() => setUser(undefined)}
      >
        Logout
      </button>
      <pre className="m-0 mt-2">
        { user ? JSON.stringify(user, null, 2) : 'There is no user.'}
      </pre>
    </div>
  );
}
