import React from 'react';
import './About.css'
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div>
          <div className="head row">
             <div className="col-6 text-white">
               <h1>Empower Yourself</h1>
               <h5><span className="text-primary">Free online courses</span> from the world’s leading experts.</h5>
               <h5>Join 20 million learners today.</h5>
               <Button className="btn btn primary my-3">sign up now</Button>
               <h3>Celebrating 14 Years of Empowerment</h3>
               <div className="img-container my-5">
                   <img src="https://i.ytimg.com/vi_webp/zHO1AOoCSco/mqdefault.webp" alt="" />
               </div>
             </div>
             <div className="col-6 row my-5 g-3 pb-3">
               
                <div className="col-4 ">
                    <div className="bg-white text-dark rounded py-3 text-center">
                        <h1><i className="fas fa-laptop"></i></h1>
                        <h5>IT</h5>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="bg-white text-dark rounded py-3 text-center">
                        <h1><i className="fas fa-language"></i></h1>
                        <h5>Language</h5>
                    </div>
                </div>
                 <div className="col-4">
                    <div className="bg-white text-dark rounded py-3 text-center">
                        <h1><i className="fas fa-mail-bulk"></i></h1>
                        <h5>Sales && marketing</h5>
                    </div>
                 </div>

                <div className="col-4">
                    <div className="bg-white text-dark rounded py-3 text-center">
                        <h1><i className="fas fa-mail-bulk"></i></h1>
                        <h5>Management</h5>
                    </div>
                </div>

                 <div className="col-4">
                    <div className="bg-white text-dark rounded py-3 text-center">
                        <h1><i className="fas fa-heartbeat"></i></h1>
                        <h5>Health</h5>
                    </div>
                 </div>

                 <div className="col-4">
                    <div className="bg-white text-dark rounded py-3 text-center">
                        <h1><i className="fas fa-business-time"></i></h1>
                        <h5>Business</h5>
                    </div>
                 </div>

                 <div className="col-4">
                    <div className="bg-white text-dark rounded py-2 text-center">
                        <h1><i className="fal fa-laptop-house"></i></h1>
                        <h5>Engineering & Construction</h5>
                    </div>
                 </div>

                 <div className="col-4">
                    <div className="bg-white text-dark rounded py-3 text-center">
                    <h1><i className="fas fa-toolbox"></i></h1>
                        <h5>Personal Development</h5>
                    </div>

                 </div>
                 <div className="col-4">
                    <div className="bg-white text-dark rounded py-3 text-center">
                    <h1><i className="fas fa-book-open"></i></h1>
                        <h5>Teaching & Academics</h5>
                    </div>
                 </div>
             </div>
          </div>

          <div className="counter row text-white">
              <div className="col-3 text-center">
                  <h1><i className="fas fa-user-friends"></i></h1>
                  <h1>10</h1>
                 <h1>Million Learners</h1>
              </div>
              <div className="col-3 text-center">
                  <h1><i className="fas fa-user-graduate"></i></h1>
                  <h1>1.2</h1>
                  <h1>Million Graduates</h1>
              </div>
              <div className="col-3 text-center">
                  <h1><i className="fas fa-atlas"></i></h1>
                  <h1>200+</h1>
                  <h1>Courses</h1>
              </div>
              <div className="col-3 text-center">
                  <h1><i className="fas fa-globe-africa"></i></h1>
                  <h1>50+</h1>
                  <h1>Countries</h1>
              </div>
          </div>
        </div>
    );
};

export default About;