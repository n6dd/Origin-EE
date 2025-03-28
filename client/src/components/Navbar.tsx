import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import './Button.css';

// Define CSS custom variable types
interface CustomStyle extends React.CSSProperties {
  '--btn-bg'?: string;
  '--btn-bg-hover'?: string;
}

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  useEffect(() => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  }, []);

  const tabs = [
    { label: 'Home', to: '/' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Features', to: '/features' },
    { label: 'Docs', to: '/docs' },
    { label: 'Blog', to: '/blog' },
  ];

  const theme = {
    default: '#6b7280',       // gray-500
    hover: '#4b5563',         // darker gray
  };

  const customStyle: CustomStyle = {
    '--btn-bg': theme.default,
    '--btn-bg-hover': theme.hover,
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Left: Title */}
        <div className="nav-title">
          Authentication Review
        </div>

        {/* Center: Tabs */}
        <nav className="nav-tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              to={tab.to}
              className="nav-button"
              style={customStyle}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* Right: Login/Logout */}
        <div className="nav-login">
          {loginCheck ? (
            <button
              onClick={() => {
                auth.logout();
                setLoginCheck(false);
              }}
              className="nav-button"
              style={customStyle}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                className="nav-button"
                style={customStyle}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
