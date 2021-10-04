import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'

const Details = () => {
    const {titleName} = useParams()
    const [item,setItem] = useState(titleName)
    const [title,setTitle] = useState([])

    useEffect(() =>{
     fetch('./MainCourses.json')
     .then(res=> res.json())
     .then(info =>setTitle(info))

    },[item])
    
    const matched =  title.find(c => c.title === titleName)
    console.log(title);
    return (
        <div>
            <h1>{matched?.description}ddd</h1>
        </div>
    );
};

export default Details;