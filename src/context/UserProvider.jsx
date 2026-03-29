import { useState } from "react";
import UserContext from "./UserContext";

 const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const login = (data) => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored?.email === data.email && stored?.password === data.password) {
      setUser(stored);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;