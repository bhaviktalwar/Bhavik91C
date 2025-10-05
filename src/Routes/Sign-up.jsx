import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../init-firebase";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const userRef = collection(db, "User-data");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });

  const { name, emailId, password, confirmPassword } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const docRef = await addDoc(userRef, {
        name,
        emailId,
        password,
      });

      console.log("Document written with ID: ", docRef.id); 
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Error adding user:", err);
      alert("Error registering user.");
    }
  };

  return (
    <div className="SignUpPage">
      <div className="SignUp">
        <h2>Create a Dev@Deakin Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="emailId">Email ID</label>
            <input
              name="emailId"
              id="emailId"
              type="email"
              value={emailId}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
