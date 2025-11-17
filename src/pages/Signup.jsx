import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if user already exists
    const existing = JSON.parse(localStorage.getItem("users")) || [];
    const duplicate = existing.find(
      (u) => u.email === form.email || u.username === form.username
    );

    if (duplicate) {
      alert("User already exists! Try logging in.");
      return;
    }

    // Save new user
    const newUsers = [...existing, form];
    localStorage.setItem("users", JSON.stringify(newUsers));

    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="auth-container travel-theme">
      <div className="auth-box">
        <h2>Create TravelEase Account</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already registered? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}


// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "../App.css";

// export default function Signup() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8081/auth/signup", form);
//       alert(res.data);
//       navigate("/");
//     } catch {
//       alert("Registration failed – username/email already exists.");
//     }
//   };

//   return (
//     <div className="auth-container travel-theme">
//       <div className="auth-box">
//         <h2>Create TravelEase Account</h2>
//         <form onSubmit={handleSignup}>
//           <input type="text" placeholder="Username"
//                  onChange={(e) => setForm({ ...form, username: e.target.value })} required />
//           <input type="email" placeholder="Email"
//                  onChange={(e) => setForm({ ...form, email: e.target.value })} required />
//           <input type="password" placeholder="Password"
//                  onChange={(e) => setForm({ ...form, password: e.target.value })} required />
//           <button type="submit">Sign Up</button>
//         </form>
//         <p>Already registered? <Link to="/">Login</Link></p>
//       </div>
//     </div>
//   );
// }
