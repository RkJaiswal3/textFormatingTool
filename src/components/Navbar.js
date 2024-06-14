import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
             <div className="container-fluid">
                 <Link className="navbar-brand" to="/">{props.title}</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                     aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarID">
                     <div className="navbar-nav">
                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </div>
                     <div className="navbar-nav">
                         <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                     </div>
                     <div className="navbar-nav">
                         <Link className="nav-link active" aria-current="page" to="/">Services</Link>
                     </div>
                 </div>
                 <div className="modeClass mx-2 bg-primary rounded" onClick={()=>props.toggle('primary')} style={{width:'30px',height:'30px',}}></div>
                 <div className="modeClass mx-2 bg-warning rounded" onClick={()=>props.toggle('warning')} style={{width:'30px',height:'30px',}}></div>
                 <div className="modeClass mx-2 bg-danger rounded" onClick={()=>props.toggle('danger')} style={{width:'30px',height:'30px',}}></div>
                 <div className="modeClass mx-2 bg-success rounded" onClick={()=>props.toggle('success')} style={{width:'30px',height:'30px',}}></div>

                 <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
                    <input className="form-check-input" onClick={()=>props.toggle(null)} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
                </div>
             </div>
         </nav>
  )
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
