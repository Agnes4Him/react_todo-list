import { Link } from 'react-router-dom';

const Navbar = () => {

  return(

    <nav className="navbar">

       <h1>The Inspiring Blog</h1>

       <div className="links">

         <Link to="/">Home</Link>

         <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'plum',
          borderRadius: '8px' 
        }}>New Blog</Link>

       </div>
    </nav>
  );
}

export default Navbar;