import React, { useState, useEffect } from "react";

import {Link, useNavigate} from "react-router-dom";
import "./booklist.css";

const  BookList=()=>{

    const [result,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3005/posts").then((data)=>data.json()).then((result)=>{
      setData(result)
    })
},[])
    


const Navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.setItem("authorization","");
        Navigate("/")
    }

return(
<div className="main">
    <h1>Books List</h1>
    <h3 onClick={handleLogout}>Logout</h3>
    <Link to="/addbook"><button className="btn1" >+ Add New Book</button></Link>
    
    {
  result.map((user)=>{
      return (
        <div className="bookdata">
            
    <Link to="/bookdetails">
        <img className="book" src={`http://localhost:3005/${user.path}`} alt="book" />
        </Link>   
        <div className="title">{user.title}</div>   
        <div className="author">{user.author}</div>
        <div className="disc" >{user.description}</div>
        
        <div className="publisher">{user.publisher}</div>
   
        </div>
      )
    })
  }
       
</div>

)

}
export default BookList;