import React from 'react';
import { Link ,NavLink} from 'react-router-dom'
import GoogleApi from './GoogleApi';
function Header(props) {
const {pathName} = props.location.pathname;
console.log(props.location.pathname)
  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <NavLink to="/" exact className="item">Home</NavLink>
        <NavLink to="/streams/new" className="item">New</NavLink>
        <NavLink to="/streams/edit" className="item">Edit</NavLink>
        <NavLink to="/streams/delete" className="item">Delete</NavLink>
        <NavLink to="/streams/show" className="item">Show</NavLink>
        <div className="right menu">
        {/* <Link to="/logout" className="item">Logout</Link> */}
        <GoogleApi ></GoogleApi>
        </div>
      </div>
      <div className="ui segment">
        <p></p>
      </div>
    </div>
  )
}

export default Header;
