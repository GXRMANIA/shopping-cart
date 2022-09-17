import './app.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
        <div className='home'>
          <div className='title'>Sustainable yoga mats</div>
          <div className='subtitle'>Die All-in-One Yogamatte: Rutschfeste Unterlage für jeden Yogaflow. Saugfähige Mikrofaser aus recyceltem PET und biologisch abbaubarer Naturkautschuk.</div>
          <Link to="/products" style={{textDecoration: 'none'}}>
            <button>Shop now</button>
          </Link>
        </div>   
  );
}

export default App;
