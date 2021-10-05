import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';

const Details = () => {
    const {titleName} = useParams()
    const [course,setCourse] = useState([])
    const history = useHistory()

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/pervejislam2404/json-data/main/myData.json')
        .then(res => res.json())
     .then(info =>setCourse(info))
     },[])
    
     const matched = course?.find(mt => mt.title === titleName)
    const {location,title,img,durations,courses,type,rate,price,description} = matched || {};

// route-changing-function

     const handleClick=() => {
         history.push('/services')
     }
      
    return (

        // details-of-every-single-selected-products

        <div className="mx-auto">
          {matched &&  <Card className="border-0 mx-auto my-4 shadow-lg" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-light shadow-lg">
                <p>{location}</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
               {description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <h5>{durations}</h5>
                    <h5>{courses}</h5>
                </div>
                <p>{type}</p>

                {/* icon-for-rating */}

                <h5><i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning pe-2"></i>
                    {rate}</h5>
                    <h3>course fee {price}</h3>
                <Button onClick={handleClick} variant="primary">Go Back</Button>
            </Card.Body>
            </Card>}
        </div>
    );
};

export default Details;