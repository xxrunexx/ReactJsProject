// IMPORT MODULES
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// IMPORT COMPONENTS
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

// IMPORT ASSETS
import logo from '../Assets/img/logo.png'
import '../Assets/css/style.css'

function Navbar() {
    const {isLoading} = useAuth0();

    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }

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
                <nav className="ml-auto">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                    <li>
                        <div className="btn">
                        {/* <Link to="/login" className="nav-link"><strong>Masuk</strong></Link> */}
                        <LoginButton/>
                        <LogoutButton/>
                        </div>
                    </li>
                    {/* SIGN UP FEATURE, ADDITIONAL FEATURE */}
                    <li>
                        <div className="btn btn-primary" id="daftar" >
                        <a className=" nav-link"  href="#">Daftar</a>
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
