import { render } from '@testing-library/react'
import React from 'react'
import { Link } from 'react-router-dom'

const features = [
    // {
    //     id: 1,
    //     style: "fitur1",
    //     title: "Cari Berita",
    // },
    {
        id: 2,
        style: "fitur2",
        title:"Event Seminar/Workshop",
        target: "/cari-event",
    },
    {
        id: 3,
        style: "fitur3",
        title:"Cari Sekolah",
        target: "/",
    },
]

function Feature() {
    const renderCard = (card, index) => {
        return(
            <div className="col-md-6 px-0" key={index}>
                <a href="#" style={{textDecoration: "none"}}>
                    <div className="card" style={{width: "100%"}} id="wrapperfitur">
                        <div id={card.style} className="card-body fitur-body p-0">
                            <Link to={card.target} style={{textDecoration: 'none'}}>
                                <p className="card-text text-center title-fitur">
                                    {card.title}
                                </p>
                            </Link>                        
                            {/* {console.log("isi title" , card.title )} */}
                        </div>
                    </div>
                </a>
            </div>  
        )
    }
    return (
        <div>
            <div style={{display: "inline-flex", width:"100%"}}>
                <div className="row" style={{width:"100%"}}>
                    {features.map(renderCard)}
                </div>
            </div>
        </div>
    )
}

export default Feature;
