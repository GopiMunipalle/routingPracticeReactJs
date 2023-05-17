// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <p className="wave-text">Wave</p>
    </div>
    <ul className="items-container">
      <li>
        <Link to="/" className="wave-text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="wave-text">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="wave-text">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
