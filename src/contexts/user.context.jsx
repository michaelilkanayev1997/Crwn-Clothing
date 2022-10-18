import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//The actual storage itself
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//The provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe; // Clean up this listener
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
