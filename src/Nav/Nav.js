import './nav.css'
import { Link } from 'react-router-dom'

function Nav(props) {

    return (
        <nav>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <h1>YogaStore</h1>
                </Link>
            <ul>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>Home</li>
                </Link>
                <Link to="/products" style={{textDecoration: 'none'}}>
                    <li>Products</li>
                </Link>
                <Link to="/contact" style={{textDecoration: 'none'}}>
                    <li>Contact</li>
                </Link>
                <Link to="/card" style={{textDecoration: 'none'}}>
                    <li>Card {props.itemsInCart.reduce((acc, cur) => acc + cur.amount, 0)}</li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  