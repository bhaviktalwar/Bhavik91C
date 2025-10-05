import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  // Sign out function
  const logout = () => {
    setCurrentUser(null);
    setUserDetails(null);
    // Note: Since we're using custom authentication, we just clear the state
    // If you were using Firebase Auth, you would call signOut(auth)
    return Promise.resolve();
  };

  // Custom login function (for your current Firestore-based auth)
  const login = (userData) => {
    setCurrentUser({ email: userData.emailId });
    setUserDetails(userData);
  };

  useEffect(() => {
    // Check if user data exists in localStorage on app load
    const savedUser = localStorage.getItem('currentUser');
    const savedUserDetails = localStorage.getItem('userDetails');
    
    if (savedUser && savedUserDetails) {
      setCurrentUser(JSON.parse(savedUser));
      setUserDetails(JSON.parse(savedUserDetails));
    }
    
    setLoading(false);
  }, []);

  // Save user data to localStorage when user state changes
  useEffect(() => {
    if (currentUser && userDetails) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } else {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('userDetails');
    }
  }, [currentUser, userDetails]);

  const value = {
    currentUser,
    userDetails,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}