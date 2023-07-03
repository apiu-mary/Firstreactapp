import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <div>
              <h1>React Router Dorm Tutorial</h1>
              <ul className="Nav">  
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">MoreDetails</Link>
                </li>
                <li>
                    < Link to="/profile">Login</Link>
                </li>
              </ul>
        </div>
    )
}
export default Header