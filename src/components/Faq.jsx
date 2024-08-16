import React from 'react'
import Navbar from './Navbar'

const Faq = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="text-center">
                                    <h5 class="fst-italic">
                                        <b>
                                        Frequently Asked Questions
                                        </b>
                                    </h5>
                                    <p class="fst-italic">
                                    Welcome! We've compiled a list of frequently asked questions to help you. If you cannot find the necessary information, please get in touch with us. We are always happy to help.
                                    </p>
                                    </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="text-center">
                                    <h5 class="fst-italic">
                                        <b>
                                            Getting Started
                                        </b>
                                    </h5>
                                    <br>
                                    </br>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    IS YOUR SOFTWARE VIEWABLE ON MY TABLET AND/OR SMART PHONE?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        Of course. The software platform is built using responsive design methodology, so each page will load as your device would prefer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    IS THERE A USER LIMIT OR “PER SEAT” CHARGE FOR THE  SOFTWARE?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        No, you will pay a per-show/event fee for each of the software modules you are using. That fee allows for an unlimited number of users.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    DOES MAP YOUR SHOW GUARANTEE 100% UPTIME?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        Our system environment is supported by a staff of network engineers on-call 24/7. We take responsibility for network availability within our framework; however, we cannot be held liable for problems outside of our network.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    IS MYS PCI COMPLIANT?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        The  system is scanned and recertified on a quarterly basis.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    CAN I MANAGE MY FLOOR PLAN WITHIN THE  SYSTEM??
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        Yes; we provide a floor plan Builder as part of our software. Clients can import a floor plan file from their show decorator or can build their floor plan from scratch using the Builder. Once the floor plan is in place, it can be maintained within the Builder or through nightly updates of new files.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    WE USE ANOTHER VENDOR TO MANAGE OUR EXHIBITOR DATA (OR REGISTRATIONS, SESSIONS, ETC.); CAN MYS INTEGRATE WITH THEM?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        Map Your Show has integrations already set up with many different trade show vendors. If yours is not one we currently have in place, we can evaluate if we would be able to develop an integration with them.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    CAN YOU PROCESS TRANSACTIONS IN CURRENCIES OUTSIDE THE U.S. DOLLAR?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>
                                                        We certainly can. Our Booth Sales software is compatible with several different currencies.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">Ask Us</h5>
                                        <label htmlFor="Enter Your Question" className="form-label">
                                        </label>
                                        <input type="text" className="form-container" />
                                        <br></br>
                                        <br></br>
                                        <div className="button btn btn-primary">
                                            SEND
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </div>
    )
}

export default Faq
