import React, { useEffect, useState } from 'react';
// import Config from '../config';
import * as DataStore from '../services/firestore';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  useEffect(() => {
    DataStore.Config.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }, []);
  console.log(currentUser);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
