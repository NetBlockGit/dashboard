import React from "react";


interface AuthContextType {
    token: string | null;
    setToken: (token: string) => void;
    removeToken: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
