import './app.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <div>
        <div className='home'>
          <Link to="/products">
            <button>Shop now</button>
          </Link>
        </div>   
    </div>
  );
}

export default App;
