// IMPORT MODULES
import React from 'react'
import { Link } from 'react-router-dom'
// IMPORT ASSETS
import logo from '../Assets/img/logo.png'
import '../Assets/css/style.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" id="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Beranda</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fitur
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link to="/" className="dropdown-item" href="#">Cari Sekolah</Link></li>
                        <li><Link to="/cari-event" className="dropdown-item" href="#">Cari Event</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Hubungi Kami</a>
                    </li>
                </ul>
                <nav class="ml-auto">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                    <li>
                        <div class="btn">
                        <Link to="/login" class="nav-link"><strong>Masuk</strong></Link>
                        </div>
                    </li>
                    {/* SIGN UP FEATURE, ADDITIONAL FEATURE */}
                    <li>
                        <div class="btn btn-primary" id="daftar" >
                        <a class=" nav-link"  href="#">Daftar</a>
                        </div>
                        
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
