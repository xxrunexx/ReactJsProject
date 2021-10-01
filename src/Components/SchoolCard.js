import React from 'react'

const schoolData = [
    {
        id: 1,
        name: "MAN 19 Jakarta",
        img: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/man19.png?alt=media&token=6ed37b3b-1959-4f7d-9271-dca48d5dab66",
        link: "https://man19jkt.sch.id",
    },
    {
        id: 2,
        name: "SMAN 63 Jakarta",
        img: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/sman63.png?alt=media&token=28f62cca-780d-470d-9a3a-91cfed087d80",
        link: "https://sman63jkt.sch.id",
    },
    {
        id: 3,
        name: "SMAN 23 Jakarta",
        img: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/sman23.png?alt=media&token=a59199cc-2be3-4b73-9d74-d09aedd9efca",
        link: "https://sman23jkt.sch.id",
    },
    {
        id: 4,
        name: "SMAN 1 Jakarta",
        img: "https://firebasestorage.googleapis.com/v0/b/reactjs-project-513fb.appspot.com/o/sman1.png?alt=media&token=4145b797-1e65-405c-a1c8-3ba1bca9e421",
        link: "https://sman1-jkt.sch.id"
    },
]

function SchoolCard() {
    const renderCard = (card, index) => {
        return (
            <div className="col-md-3" key={index}>
                <div className="card shadow card-univ pt-4 mb-2" style={{height: "100%"}}>
                    <img src={card.img} className="card-img-top img-univ mx-auto" alt="Card image cap"/>
                
            
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <a href={card.link} target="_blank" className="btn" id="CardUniv">Lihat Detail</a>
                </div>
                </div>
            </div>
        )
    }
    return (
        <div style={{display: "inline-flex"}}>
            <div className="row my-4">
                {schoolData.map(renderCard)}
            </div>
        </div>
    )
}


export default SchoolCard;
