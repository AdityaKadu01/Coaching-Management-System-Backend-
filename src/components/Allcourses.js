import React, { useState,useEffect } from 'react'
import Course from "./Course"
import { Button } from 'reactstrap';

import base_url from '../api/bootapi';
import axios from "axios" ;
import { toast } from 'react-toastify';

const Allcourse=()=>
{ useEffect(() => {
    document.title = "All Courses || Learncodewith Shivam" ;
} , []) ;


// function to call server:
const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
(response)=> {
// success
//console.log(response);
console.log(response.data);
toast.success("courses has been loaded");
setCourses(response.data);
} ,
(error)=> {
// for error
console.log(error) ;
toast.error("something went wrong");
}

    );
};


//calling loading course function

useEffect(() => {
    getAllCoursesFromServer() ;
}, [] ) ;
 


    const [courses,setCourses]=useState([{title:"Java Course", description: "This is just for demo purpose" },
{title:"Python Course", description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its  use of significant indentation."},
{title:"Python Course", description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its  use of significant indentation."}

]);

return (
    <div>
        <h1>All Course</h1>
        <p> List of courses are as follows </p>
{courses.length > 0 ? 
courses.map ((item) => <Course key={item.id} course={item} />)
: "No courses"}

    </div>
);
};
export default Allcourse ;