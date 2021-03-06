import React from 'react';
import {NavLink} from 'react-router-dom'
import { Card } from 'react-bootstrap';




const Course = ({course}) => {
   
    const {location,title,subtitle,img,rate,price} = course;
    
    return (
        <div className="col-3 overflow-hidden">
           <Card>

               {/* designing-the-course */}

                <Card.Img variant="top" src={img} />
                <Card.Body className="bg-light">
                    <Card.Title>{title}</Card.Title>
                    <h3>{location}</h3>
                    <Card.Text>
                   {subtitle}
                    </Card.Text>
                    <h3>price {price}</h3>
                    <h5><i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning pe-2"></i>
                    {rate}</h5>

                    {/* routing-through-useparams */}
                    
                   <NavLink to={`/details/${title}`} className="text-decoration-none bg-primary text-white px-3 py-1 fs-5 rounded my-3">Details</NavLink>
                </Card.Body>
           </Card>
        </div>
    );
};

export default Course;