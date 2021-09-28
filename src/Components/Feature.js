import React from 'react'

const features = [
    {
        id: 1,
        fitur: "fitur1",
        title: "Cari Berita",
    },
    {
        id: 2,
        fitur: "fitur2",
        title:"Event Seminar/Workshop",
    },
    {
        id: 3,
        fitur: "fitur3",
        title:"Cari Sekolah",
    },
]

function Feature() {
    return (
        <div>
            <div style={{display: "inline-flex"}}>
                <div class="row">
                    {/* <div class="col-md-6 px-0" v-for="(fitur, index) in fiturs" :key="index"> */}
                    <div class="col-md-6 px-0">
                        <a href="#" style={{textDecoration: "none"}}>
                        <div class="card" style={{width: "100%"}} id="wrapperfitur">
                        {/* <div class="card-body fitur-body p-0 " :id="fitur.fitur"> */}
                            <div class="card-body fitur-body p-0 ">
                            {/* <p class="card-text text-center title-fitur" >{{ fitur.title }}</p> */}
                            <p class="card-text text-center title-fitur">Lorem</p>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
