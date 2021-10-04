import React from 'react';
import {NavLink} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Details from '../Details/Details';



const Course = ({course}) => {
   
    const {location,title,subtitle,img,rate} = course;
    
    return (
        <div className="col-3 overflow-hidden">
           <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="bg-light">
                    <Card.Title>{title}</Card.Title>
                    <h3>{location}</h3>
                    <Card.Text>
                   {subtitle}
                    </Card.Text>
                    <h5><i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning"></i>
                    <i class="fas fa-star-half-alt text-warning pe-2"></i>
                    {rate}</h5>
                   <NavLink to={`/details/${title}`} className="text-decoration-none bg-primary text-white px-3 py-1 fs-5 rounded my-3">Details</NavLink>
                </Card.Body>
           </Card>
        </div>
    );
};

export default Course;