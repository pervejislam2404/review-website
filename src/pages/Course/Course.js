import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import Details from '../Details/Details';


const Course = ({course}) => {
   
    const {location,title,subtitle,img} = course;
    
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
                   <NavLink to="/about">Details</NavLink>
                </Card.Body>
           </Card>
        </div>
    );
};

export default Course;