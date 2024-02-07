import { useContext } from "react";
import { authContext } from "./authContext";

export const useAuthContext = () => {
  const ctx = useContext(authContext);
  if (!ctx) {
    throw new Error("AuthContext not provided");
  }
  return ctx;
};
