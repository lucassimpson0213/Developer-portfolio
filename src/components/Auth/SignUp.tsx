import { useState } from "react";
import useSignUp from "../hooks/useSignUp"; // Adjust the import path as needed

export default function SignUpComponent() {
  const { signUp, isLoading, error, isSuccessful } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // Validate email and password if needed

    try {
      await signUp({ email, password });
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  if (isSuccessful) {
    // Redirect or show a success message
    return <div>Sign up successful!</div>;
  }

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp} disabled={isLoading}>
        Sign Up
      </button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
