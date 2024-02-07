import { createContext } from "react";

export type AuthContextType = object;

export const authContext = createContext<AuthContextType | null>(null);
