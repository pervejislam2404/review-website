import React,{useState,useEffect} from 'react';
import Course from '../Course/Course';

const Services = () => {
const [courses,setCourses] = useState([])
    useEffect(() => {
fetch('./MainCourses.json')
.then(res => res.json())
.then(items => setCourses(items))

    },[])
    return (
        <div className="row  px-5 py-3">
           {
               courses.map((item,index)=> <Course key={index} course={item}></Course>)
           }
        </div>
    );
};

export default Services;