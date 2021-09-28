import React from 'react'
import Navbar from '../Components/Navbar'
import '../Assets/css/style.css'
import hero from '../Assets/img/hero.png'

function Home() {
    return (
        <div>
            {/* Import Navbar Component from Components */}
            <Navbar/>
            {/* Creating Jumbotron & import assets */}
            <div className="jumbotron">
                <div className="container pt-5 mt-5">
                    <div className="row" id="on-jumbotron">
                    <div className="col-md-7 tagline">
                        <h1 className="mb-3">
                        <strong>Bingung Cari Informasi Seputar Sekolah ?</strong>
                        </h1>
                        <h3 className="mb-3">Cari disini aja!</h3>
                        <h5 className="mb-4">
                        Dapatkan informasi seputar dunia pendidikan terkini dari kami melalui aplikasi <strong>sekolah pintar</strong>
                        </h5>
                    </div>
                    <div className="col-md-5" id="hero">
                        <img
                        className="img-fluid"
                        src={hero}
                        width="400px "
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                    <div className="input-group mt-3 mb-3" id="cari">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Cari informasi sekolah"
                        />
                        <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        >
                        <i className="fa fa-search"></i>
                        </button>
                    </div>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    id="vector"
                >
                    <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Component best of school */}
            <div className="container text-center">
            <div className="row">
                <div className="col text-center tagline">
                <h2>Rekomendasi <strong>Sekolah Terbaik</strong></h2>
                <a href="" className="float-right btn btn-primary"
                    >Lihat selengkapnya <i className="fa fa-caret-right ml-1"></i>
                </a>
                </div>
            </div>
            <hr /> 
            </div>


            {/* Closing div tag for the first div tag, DO NOT DELETE */}
        </div>
    )
}

export default Home;
