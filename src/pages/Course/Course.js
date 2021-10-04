import React from 'react';
import { Card,Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Course = ({course}) => {
    const history = useHistory()
    const {location,title,subtitle,img} = course;
    const handleClick=(titleName) =>{
console.log(titleName)
history.push("course/titleName")
    }
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
                    <Button onClick={()=>handleClick(title)} variant="primary">Details</Button>
                </Card.Body>
           </Card>
        </div>
    );
};

export default Course;