// useAuthChangeHandler.js
import { useEffect } from "react";
import { supabase } from "../../../supabaseclient"; // Adjust the path according to your project structure

const useAuthChangeHandler = (onAuthStateChange) => {
  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      console.log(`Auth event: ${event}`, session);

      switch (event) {
        case 'INITIAL_SESSION':
          onAuthStateChange(event, session);
          break;
        case 'SIGNED_IN':
          onAuthStateChange(event, session);
          break;
        case 'SIGNED_OUT':
          onAuthStateChange(event, session);
          break;
        case 'PASSWORD_RECOVERY':
          onAuthStateChange(event, session);
          break;
        case 'TOKEN_REFRESHED':
          onAuthStateChange(event, session);
          break;
        case 'USER_UPDATED':
          onAuthStateChange(event, session);
          break;
        default:
          console.log("Unhandled auth event:", event);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onAuthStateChange]);
};

export default useAuthChangeHandler;