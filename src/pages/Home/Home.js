import React,{useState,useEffect} from 'react';
import './Home.css'
// import banner from './banner.jpg'
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory()
    const [item,setItem] = useState([])
useEffect(()=>{
fetch('https://raw.githubusercontent.com/pervejislam2404/json-data/main/myData.json')
.then(res=> res.json())
.then(data => setItem(data.slice(0,4)))
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
                 <Button onClick={handleRoute} className="btn btn-primary my-4 fw-bold">GET START</Button>
                   </div>
               </div>
              
            </div>
         <div className="row px-5 home">
         {
            //  home-section-card-design
            
               item.map((course,index)=> {return(
               <Card key={index} className="col-6 p-5 border-0">
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body className="bg-light  shadow">
                            <Card.Title>{course.title}</Card.Title>
                           <h4>{course.location}</h4>
                            <Card.Text>
                        {course.description}
                            </Card.Text>
                            <h4>price {course.price}</h4>
                            <h5>
                                <i className="fas fa-star-half-alt text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning pe-2"></i>
                                 {course.rate}
                            
                            </h5>
                            <Button onClick={handleRoute} variant="primary">See More</Button>
                        </Card.Body>
              </Card>
               )})
           }
         </div>
        </div>
    );
};

export default Home;