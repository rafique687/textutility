import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(navlist) {
  return (
    <div className='container'>
     
      <nav className={`navbar navbar-expand-lg bg-${navlist.mode}`} >
  <div className="container-fluid" style={navlist.mystyle}>
    <a className="navbar-brand" href="/" style={navlist.mystyle}>Text Utility</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={navlist.mystyle}>
        <li className="nav-item" >
          <Link className="nav-Link active" aria-current="page" to="/" style={navlist.mystyle}>{navlist.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/about" style={navlist.mystyle}>{navlist.about}</Link>
          
        </li>
       
        <li className="nav-item">
          <Link className="nav-Link disabled" aria-disabled="flase" to={'/contact'}>{navlist.cnt}</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={navlist.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
