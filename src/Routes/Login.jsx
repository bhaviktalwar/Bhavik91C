import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../init-firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login2.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const navigate = useNavigate();
  const { login, currentUser } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Query Firestore for user by email
      const userQuery = query(
        collection(db, "User-data"),
        where("emailId", "==", email)
      );
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        alert("Invalid email or password");
        return;
      }

      const userData = querySnapshot.docs[0].data();

      if (userData.password === password) {
        // Use the login function from AuthContext
        login(userData);
        alert(`Welcome, ${userData.name}`);
        navigate("/"); // Redirect to home
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Error logging in. Check console for details.");
    }
  };

  return (
    <div className="LoginPage">
      <div className="login-container">
        <div className="login-form-box">
          <div className="signup-link">
            <Link to="/signup">Sign up</Link>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Your email"
              autoComplete="off"
              required
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Your password"
              autoComplete="new-password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
