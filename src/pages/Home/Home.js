import React,{useState,useEffect} from 'react';
import './Home.css'
// import banner from './banner.jpg'
import { Card,Button } from 'react-bootstrap';

const Home = () => {
    const [item,setItem] = useState([])
useEffect(()=>{
fetch('./MyCourses.json')
.then(res=> res.json())
.then(data => setItem(data))
},[])

    return (
        <div className="row px-5 home">
           {
               item.map(course=> {return(
               <Card className="col-6 p-5 border-0">
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body className="bg-light">
                            <Card.Title>{course.title}</Card.Title>
                           <h4>{course.name}</h4>
                            <Card.Text>
                        {course.description}
                            </Card.Text>
                            <Button  variant="primary">Details</Button>
                        </Card.Body>
              </Card>
               )})
           }
        </div>
    );
};

export default Home;