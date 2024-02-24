import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar redressed-regular">
      <Link to = "/">Home</Link>
      <Link to = "/projects">Projects</Link>
      <Link to = "/resume">Resume</Link>

    </div>
  );
}

export default NavBar;
