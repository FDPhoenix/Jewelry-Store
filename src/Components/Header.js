import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">

          <Link className="navbar-brand" to='/'>Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><Link class="nav-link" to='/about'>About</Link></li>
              <li class="nav-item"><Link class="nav-link" to='/product'>Product</Link></li>
              <li class="nav-item"><Link class="nav-link" to='/contact'>Contact</Link></li>
            </ul>

            <form className="d-flex">
              <Link className="btn btn-outline-dark" to='/cart'>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </Link>
              <button className="ms-2 btn btn-outline-dark">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
