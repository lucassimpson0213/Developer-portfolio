import { useEffect, useState } from "react";
import EffectDisplay from "./EffectDisplay";

export default function EffectExample() {
  const [quotes, setQuotes] = useState([]); // Rename to `quotes` for clarity
  const [isLoading, setIsLoading] = useState(true); // Better naming for the loading state
  const [error, setError] = useState("");
  // Separate state for handling errors

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setQuotes(json); // Assuming the API returns an array directly
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("there was an error try again");
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <EffectDisplay quotes={quotes} />; // Pass the entire array to `EffectDisplay`
}
