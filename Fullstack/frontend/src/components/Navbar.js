import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid" style={{justifyContent: "normal"}}>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">MusixOn</Link>
                <div className='me-auto'>
                    <Link type="button" className="btn btn-success mx-1" to='/login'>LogIn</Link>
                    <Link type="button" className="btn btn-success mx-1" to='/signup'>SignUp</Link>
                </div>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MusixOn</h3>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p>BROWSE</p>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/newreleases" style={{fontWeight: 'bold'}}>New Releases</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/topplaylists" style={{fontWeight: 'bold'}}>Top Playlists</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/topartists" style={{fontWeight: 'bold'}}>Top Artists</Link>
                            </li>
                        </ul>
                        <p className='mt-3'>LIBRARY</p>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" to="/" style={{fontWeight: 'bold'}}><i className="fa-solid fa-clock-rotate-left mx-1"></i>History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/" style={{fontWeight: 'bold'}}><i className="fa-sharp fa-solid fa-heart-circle-check mx-1"></i>Songs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/" style={{fontWeight: 'bold'}}><i className="fa-solid fa-record-vinyl mx-1"></i>Albums</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/" style={{fontWeight: 'bold'}}><i className="fa-solid fa-microphone-lines mx-1"></i>Artists</a>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success mx-1" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
