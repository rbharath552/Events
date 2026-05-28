import { useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Backend URL
  const API = "https://event-38as.onrender.com/api/auth";

  // REGISTER
  const register = async (data) => {

    try {

      const response = await axios.post(
        `${API}/register`,
        data
      );

      console.log(response.data);

      setUser(response.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      return response.data;

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }
  };

  // LOGIN
  const login = async (data) => {

    try {

      const response = await axios.post(
        `${API}/login`,
        data
      );

      console.log(response.data);

      setUser(response.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      return response.data;

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }
  };

  // LOGOUT
  const logout = () => {

    setUser(null);

    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;