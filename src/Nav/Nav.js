import './nav.css'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav>
                <Link to="/">
                    <h1>FakeStore</h1>
                </Link>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/products">
                    <li>Products</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/card">
                    <li>Card</li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  