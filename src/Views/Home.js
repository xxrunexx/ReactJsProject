// IMPORT MODULES
import axios from "axios";
import React, { useState, useEffect } from 'react'

// IMPORT COMPONENTS
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Feature from '../Components/Feature'

// IMPORT ASSETS
import '../Assets/css/style.css'
import hero from '../Assets/img/hero.png'

function Home() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
            "https://api-sekolah-indonesia.herokuapp.com/sekolah?page=1&perPage=5"
        );
        setPosts(response.data.dataSekolah);
        console.log(response.data.dataSekolah);
        setLoading(false);
        };

        loadPosts();
    }, []);

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
                        onChange={(e) => setSearchTitle(e.target.value)}
                        />
                        <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        >
                        <i className="fa fa-search"></i>
                        </button>
                    </div>
                    {loading ? (
                            <h4>Loading ...</h4>
                        ) : (
                            posts
                            .filter((value) => {
                                if (searchTitle === "") {
                                return null;
                                } else if (
                                value.sekolah.toLowerCase().includes(searchTitle.toLowerCase())
                                ) {
                                return value;
                                }
                            })
                            .map((item) => 
                            <>
                            <p key={item.id}>
                                <a 
                                className="btn btn-primary"
                                id="data-card-title" 
                                data-toggle="collapse" 
                                href={`#${item.id}`}
                                role="button" 
                                aria-expanded="false" 
                                aria-controls={item.id}>
                                    {item.sekolah}
                                </a>
                            </p>
                                <div className="collapse" id={item.id}>
                                <div className="card card-body">
                                    {item.alamat_jalan}
                                </div>
                            </div>
                            </>)
                        )}
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

            {/* Part of SchoolCard */}
            <div className="container text-center">
            <div className="row">
                <div className="col text-center tagline">
                <h2>Rekomendasi <strong>Sekolah Terbaik</strong></h2>
                {/* <a href="" className="float-right btn btn-primary"
                    >Lihat selengkapnya <i className="fa fa-caret-right ml-1"></i>
                </a> */}
                </div>
            </div>
            <hr /> 
            </div>
            {/* Import SchoolCard Component from Components */}
            {/* <SchoolCard /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#17a2af"
                    fill-opacity="1"
                    d="M0,0L48,32C96,64,192,128,288,165.3C384,203,480,213,576,192C672,171,768,117,864,101.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
            </svg>
            {/* Part of Fitur */}
            <div className="wrapper-fitur">
                <div className="container">
                    <div className="row mb-4">
                    <div className="col text-center">
                        <h2 id="white-title"><strong>Fitur </strong>Kampus Indonesia</h2>
                    </div>
                    </div>
                    {/* <Feature/> */}
                    {/* Import Fitur Component from Components */}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill="#17a2af"
                fill-opacity="1"
                d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,96C672,96,768,160,864,165.3C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
            </svg>
            
            {/* ADDITIONAL WAVES FOR STYLING */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill="#67ade7"
                fill-opacity="1"
                d="M0,0L48,32C96,64,192,128,288,165.3C384,203,480,213,576,192C672,171,768,117,864,101.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </svg> */}



            <Footer/>
            {/* Closing div tag for the first div tag, DO NOT DELETE */}
        </div>
    )
}

export default Home;
