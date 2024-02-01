import { useEffect } from "react";
import { supabase } from "../../../supabaseclient"; // Adjust the path according to your project structure
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

// Define the type for the callback function
type AuthChangeHandler = (
  event: AuthChangeEvent,
  session: Session | null
) => void;

const useAuthChangeHandler = (handleAuthChange: AuthChangeHandler): void => {
  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      // Check if session is null
      if (!session) {
        handleAuthChange(event, null);
        return;
      }

      // Execute the callback function with event and session
      handleAuthChange(event, session);
    });

    // Return a cleanup function that unsubscribes from the event
    return () => subscription.unsubscribe();
  }, [handleAuthChange]); // Only re-subscribe if handleAuthChange changes
};

export default useAuthChangeHandler;
