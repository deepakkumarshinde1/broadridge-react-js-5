import { createContext, useContext, useState } from "react";

let AuthContext = createContext({});

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}

function getAuthDetailsFromLocalStorage() {
  let authUser = localStorage.getItem("auth");
  if (authUser) {
    return JSON.parse(authUser);
  } else {
    return null;
  }
}

export function AuthContextProvider({ children }) {
  let [authUser] = useState(getAuthDetailsFromLocalStorage());
  let logout = () => {
    let isLogout = confirm("Are you sure to logout ?");
    if (isLogout) {
      localStorage.removeItem("auth");
      location.replace("/login");
    }
  };
  let shared = {
    authUser,
    logout,
  };
  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
}
