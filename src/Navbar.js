import{Link} from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>THE BLOG</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color:"white",
                backgroundColor:'#f1356d',
                borderRadius:'8px'
            }}>New blog</Link>
            <Link to= "/admin">Login</Link>
        </div>
        </nav>
    );
}
 
export default Navbar;