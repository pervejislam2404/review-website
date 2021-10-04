import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="m-0 footer row px-5 text-white">
            <div className="col-4 pt-5">
                <h1>Best Course</h1>
                <h6>UCL (University College London)</h6>
                <h6>King's College London</h6>
                <h6>Macquarie University</h6>
            </div>
            <div className="col-4 pt-5">
                <h1>Contact</h1>
                <h4><i class="fab fa-facebook mx-2 text-primary fs-3"></i>Facebook</h4>
                <h5><i class="fab fa-instagram-square mx-2 text-danger fs-3"></i>Instagram</h5>
                <h5><i class="fab fa-youtube-square mx-2 text-danger fs-3"></i>YouTube</h5>
            </div>
            <div className="col-4 pt-5">
                <h1>Enrolled</h1>
                <h1 className="fw-bold">20,425</h1>
            </div>
        </div>
    );
};

export default Footer;