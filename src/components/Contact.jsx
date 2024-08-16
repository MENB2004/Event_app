import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text bg-dark text-light">
                                    <h5 class="card-text font-monospace "> Contact us</h5>
                                    <p class="card-text font-monospace test-white">
                                        ADDRESS: Spark Event Management, 200 - 1110 7 Street SW, Calgary, Alberta, T2R 1A2, Canada
                                    </p>
                                    <br></br>
                                    <p class="card-text font-monospace test-white">
                                        PHONE: +1235 2355 98
                                    </p>
                                    <br></br>
                                    <p class="card-text font-monospace test-white">
                                        EMAIL:
                                        info@yoursite.com</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="fst-italic test-dark text-centre">
                            <h5>
                                Message To Us
                            </h5>
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                <b>NAME</b>                             </label>
                            <input type="text" className="form-conatiner" />
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                <b>Email</b>
                            </label>
                            <input type="text" className="form-container" />
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                <b>Subject</b>
                            </label>
                            <input type="text" className="form-container" />
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                <b>Message</b>
                            </label>
                            <input type="text" className="form-container" />
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="button btn btn-primary">
                                Send Message
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="bg-dark">
                            <div class="text-center">
                                <div class="text-white">
                                    Spark Event Management, 200 - 1110 7 Street SW, Calgary, Alberta, T2R 1A2, Canada
                                </div>
                                <div className="button btn btn-dark">
                                    EMAIL
                                </div>
                                <br>
                                </br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
