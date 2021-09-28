import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start text-light">
                <section
                className="p-4 border-bottom">
        {/* <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div> */}
        <div className="row">
        <div className="col-md-4 ">
            <span>Get connected with us on social networks:</span>
        </div>
            <div className="col-md-8  ">
            <div>
                <a href="" className="me-4 mr-3 ml-3 text-reset" style={{fontSize:"15px"}} >
                <i className="fa fa-facebook"></i>
                </a>
                <a href="" className="me-4 mr-3 ml-3 text-reset" style={{fontSize:"15px"}}>
                <i className="fa fa-twitter"></i>
                </a>
                <a href="" className="me-4 mr-3 ml-3 text-reset" style={{fontSize:"15px"}}>
                <i className="fa fa-google"></i>
                </a>
                <a href="" className="me-4 mr-3 ml-3 text-reset" style={{fontSize:"15px"}}>
                <i className="fa fa-instagram"></i>
                </a>
                <a href="" className="me-4 mr-3 ml-3 text-reset" style={{fontSize:"15px"}}>
                <i className="fa fa-linkedin"></i>
                </a>
                <a href="" className="me-4 mr-3 ml-3 text-reset" style={{fontSize:"15px"}}>
                <i className="fa fa-github"></i>
                </a>
            </div>
        </div>
        </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Sekolah Pintar</h6>
            <p id="desc-footer">
            SekolahPintar merupakan perusahaan di bidang informasi 
            seputar dunia sekolah dan pencarian serta pembuatan event
            untuk workshop atau seminar
            yang memberikan informasi secara terupdate 
            dan dapat dipercaya sepenuhnya
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Fitur Kampus Indonesia</h6>
            <p>
              <a href="#!" className="text-reset">Cari Sekolah</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Cari Event </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fa fa-home me-3 mr-1"></i> Kec Pondok Aren, Kota Tangerang Selatan, Banten
            </p>
            <p>
              <i className="fa fa-envelope me-3 mr-1"></i>
              info@sekolahpintar.id
            </p>
            <p><i className="fa fa-phone me-3 mr-1"></i> 021 2151 1512</p>
          </div>
        </div>
      </div>
    </section>
    </footer>
        </div>
    )
}


export default Footer;