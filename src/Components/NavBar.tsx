import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div id ="navbar-group">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Course</Link></li>
                <li><Link to="/students">Students</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
