import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark " style={{ color: 'white' }}>
                <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">audiophile</a>
                <i class="fas fa-shopping-cart fa-2x" style={{ color: 'white' }}></i>
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                        <a class="nav-item nav-link subtitle " href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link s" href="#">Headphones</a>
                        <a class="nav-item nav-link" href="#">Speakers</a>
                        <a class="nav-item nav-link " href="#">Earphones</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
