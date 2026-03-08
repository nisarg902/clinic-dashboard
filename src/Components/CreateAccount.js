import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreateAccount() {
  const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 1. Name Verification (First letter Capital)
  const verifyName = () => {
    const charCode = user.name.charCodeAt(0);
    if (!(charCode >= 65 && charCode <= 90)) {
      setError("First letter of Name must be Capital!");
      return false;
    }
    setError("");
    return true;
  };

  // 2. Email Verification (@gmail.com)
  const verifyEmail = () => {
    if (!user.email.endsWith("@gmail.com")) {
      setError("Email must end with @gmail.com");
      return false;
    }
    setError("");
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (verifyName() && verifyEmail()) {
      localStorage.setItem("registeredUser", JSON.stringify(user));
      alert("Registration Successful! Please Login.");
      navigate("/login"); // Maan lete hain login route hai
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg p-4 d-flex flex-row" style={{ maxWidth: '900px' }}>
        <div className="w-50 d-none d-md-block">
          <img src="article1.png" alt="Register" className="img-fluid rounded" />
        </div>
        
        <div className="p-4 w-100 w-md-50">
          <form onSubmit={handleRegister}>
            <h2 className="fw-bold">Create An Account</h2>
            <p className="text-muted">Let's start a journey to Great articles</p>
            
            <input 
              type="text" className="form-control mb-3 border-0 border-bottom rounded-0" 
              placeholder="Enter your name" 
              onChange={(e) => setUser({...user, name: e.target.value})}
              onBlur={verifyName} required 
            />
            
            <input 
              type="email" className="form-control mb-3 border-0 border-bottom rounded-0" 
              placeholder="Email Address" 
              onChange={(e) => setUser({...user, email: e.target.value})}
              onBlur={verifyEmail} required 
            />
            
            <input 
              type="password" className="form-control mb-3 border-0 border-bottom rounded-0" 
              placeholder="Password" 
              onChange={(e) => setUser({...user, password: e.target.value})}
              required 
            />
            
            <input 
              type="password" className="form-control mb-3 border-0 border-bottom rounded-0" 
              placeholder="Confirm Password" 
              onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
              required 
            />

            {error && <div className="text-danger small mb-3">{error}</div>}

            <button type="submit" className="btn btn-dark w-100 mb-3">Register</button>
            
            <div className="text-center">
              <Link to="/login" className="text-decoration-none">Already have an account? Log in</Link>
            </div>
            
            <hr />
            <button type="button" className="btn btn-outline-dark w-100 bi bi-google"> Sign in with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;