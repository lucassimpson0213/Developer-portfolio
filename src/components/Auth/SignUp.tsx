import React, { useState } from 'react';
import useSignUp from '../hooks/useSignUp';
import { useRedirect } from '../hooks/useRedirect';

export default function SignUp() {
  const { signUp, isSuccessful } = useSignUp();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const redirect = useRedirect('/congratulations');

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent the default form submission

    // Call the signUp function with user and password
    await signUp({
      username: user,
      password: password,
      email: user, // Assuming email is the same as the username
      // Add other relevant fields if needed
    });
  };

  if (isSuccessful) {
    return redirect;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          onChange={(e) => setUser(e.target.value)}
          type="email"
          placeholder="example@gmail.com"
        ></input>
        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
