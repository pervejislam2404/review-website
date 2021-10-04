import React,{useState,useEffect} from 'react';
import './Home.css'
// import banner from './banner.jpg'
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory()
    const [item,setItem] = useState([])
useEffect(()=>{
fetch('./MyCourses.json')
.then(res=> res.json())
.then(data => setItem(data))
},[])

const handleRoute=() => {
    history.push("/services")
}
    return (
        <div >
            <div className="row">
               <div className="banner">
                 
                   <div className="text-white p-5 m-5">
                 <h1 >LEARN YOUR<br></br> FAVORITE <span className="text-warning">COURSE</span><br></br> FROM ONLINE</h1>
                 <Button onClick={handleRoute} className="btn btn-primary my-4 fw-bold">GET STARTED</Button>
                   </div>
               </div>
              
            </div>
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
                            <Button onClick={handleRoute} variant="primary">Details</Button>
                        </Card.Body>
              </Card>
               )})
           }
         </div>
        </div>
    );
};

export default Home;