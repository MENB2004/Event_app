import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1529613311473-3XH6F88AOIA45ADX956W/Spark_Logo.png?format=1500w" alt="Spark Event Management" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Components</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/service">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Contact">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
