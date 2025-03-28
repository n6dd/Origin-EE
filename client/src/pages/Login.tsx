import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Auth from '../utils/auth';
import { login } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label>Username</label>
          <input 
            className="form-input"
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            className="form-input"
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            disabled={loading}
            className={`login-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                  ></circle>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </div>
        
        {/* Add sign-up section */}
        <div className="signup-prompt">
          <p>No account? <Link to="/signup">Sign up!</Link></p>
          <Link to="/signup">
            <button 
              type="button" 
              className="signup-button"
              disabled={loading}
            >
              Create Account
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;