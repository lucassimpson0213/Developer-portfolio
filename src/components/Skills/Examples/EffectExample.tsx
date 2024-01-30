import React, { useEffect, useState } from "react";
import EffectDisplay from "./EffectDisplay";

interface Quote {
  text: string;
  author?: string;
}

interface ErrorComponentProps {
  message: string | null;
}

export default function EffectExample() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Unable to fetch quotes`);
        }
        const json: Quote[] = await response.json();
        setQuotes(json);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data: ", error);
          setError("Failed to load quotes. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent message={error} />;
  }

  return <EffectDisplay quotes={quotes} />;
}

const LoadingComponent = () => {
  return <div>Loading...</div>;
};

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return <div>Error: {message}</div>;
};
