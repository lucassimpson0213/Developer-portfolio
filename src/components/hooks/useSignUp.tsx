import { useState } from 'react';
import { supabase } from '../../../../viteappportoflio/supabaseclient.js'; // Import the initialized Supabase client

interface SignUpData {
  username: string;
  password: string;
  email: string;
  // Add other relevant fields
}

interface SignUpHook {
  signUp: (userData: SignUpData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  isSuccessful: boolean;
}

function useSignUp(): SignUpHook {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const signUp = async (userData: SignUpData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccessful(false);

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
      });

      if (signUpError) {
        throw signUpError;
      }

      setIsSuccessful(true);
    } catch (error) {
      if (error instanceof Error) {
        // Handle Error objects specifically
        setError(error.message || 'Failed to sign up.');
      } else {
        // Handle other types of unexpected errors
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, isLoading, error, isSuccessful };
}

export default useSignUp;

