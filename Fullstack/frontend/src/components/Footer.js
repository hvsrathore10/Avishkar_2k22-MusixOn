import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left part */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* Right part */}
                <div>
                    <Link to="/" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/" className="me-4 text-reset"><i className="fab fa-twitter"></i></Link>
                    <Link to="/" className="me-4 text-reset"><i className="fab fa-google"></i></Link>
                    <Link to="/" className="me-4 text-reset"><i className="fab fa-instagram"></i></Link>
                    <Link to="/" className="me-4 text-reset"><i className="fab fa-linkedin"></i></Link>
                    <Link to="/" className="me-4 text-reset"><i className="fab fa-github"></i></Link>
                </div>
            </section>

            {/* <!-- Section: Links  --> */}
            <section className="container">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h5 className="text-uppercase fw-bold mb-4">MusixOn</h5>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                            <h6 className="text-uppercase fw-bold mb-4">TOP ARTISTS</h6>
                            <p><Link to="/" className="text-reset">Arijit Singh</Link></p>
                            <p><Link to="/" className="text-reset">Neha Kakkar</Link></p>
                            <p><Link to="/" className="text-reset">Diljit Dosanjh</Link></p>
                            <p><Link to="/" className="text-reset">Badshah</Link></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">TOP ACTORS</h6>
                            <p><Link to="/" className="text-reset">Salman Khan</Link></p>
                            <p><Link to="/" className="text-reset">Allu Arjun</Link></p>
                            <p><Link to="/" className="text-reset">Amitabh Bachchan</Link></p>
                            <p><Link to="/" className="text-reset">Varun Dhawan</Link></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> Tagore Hostal MNNIT Allahabad</p>
                            <p><i className="fas fa-envelope me-3"></i>harshvardhan8991@gmail.com</p>
                            <p><i className="fas fa-phone me-3"></i>91+ 9680333384</p>
                            <p><i className="fas fa-print me-3"></i>91+ 9680222284</p>
                        </div>
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>

            {/* <!-- Copyright --> */}
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2023 Copyright:<Link className="text-reset fw-bold" to="/">MusixOn</Link>
            </div>
        </footer>
    )
}

export default Footer
