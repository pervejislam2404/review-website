import React,{useState,useEffect} from 'react';
import Course from '../Course/Course';

const Services = () => {
const [courses,setCourses] = useState([])
    useEffect(() => {
fetch('./MainCourses.json')
.then(res => res.json())
.then(items => setCourses(items))
console.log(courses)
    },[])
    return (
        <div className="row  px-5 py-3">
           {
               courses.map(item=> <Course course={item}></Course>)
           }
        </div>
    );
};

export default Services;