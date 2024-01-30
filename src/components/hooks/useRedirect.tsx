// useRedirect.js
import { useNavigate } from "react-router-dom";

export const useRedirect = (path: string) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(path);
  };

  return handleRedirect;
};
