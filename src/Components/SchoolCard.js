import React from 'react'

const schoolData = [
    {
        id: 1,
        name: MAN 19 Jakarta,
        img: ,
    },
    {
        id: 2,
        name: SMAN 90 Jakarta,
        img: ,
    },
    {
        id: 3,
        name: MAN 4 Jakarta,
        img: ,
    },
    {
        id: 4,
        name: SMAN 63 Jakarta,
        img: ,
    },
]

function SchoolCard() {
    return (
        <div>
            <div style="display: inline-flex">
                <div class="row my-4">
                <div class="col-md-3" v-for="(univ, index) in universitas" :key="index">
                <div class="card shadow card-univ pt-4 mb-2 " >
                    <div class="btn" id="love"><i class="fa fa-heart"></i></div>
                    <img
                    class="card-img-top img-univ mx-auto"
                    :src="require(`@/assets/images/${univ.gambar}`)"
                    alt="Card image cap"
                    /> 

                    <div class="card-body">
                    <h5 class="card-title">{{ univ.nama }}</h5>

                    <router-link to="/" class="btn" id="CardUniv"
                        >Lihat detail <i class="fa fa-chevron-right"></i
                    ></router-link>
                    </div>
                </div>
                </div>
                    </div>
            </div>
        </div>
    )
}

export default SchoolCard
