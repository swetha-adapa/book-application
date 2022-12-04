import React, { useState, useEffect } from "react";

import {Link, useNavigate} from "react-router-dom";
import "./bookdetails.css";

const  BookEdit=()=>{

    return (
        <>
        <div className="main">
            
                  
        <Link to="/booklist"><button className="btn2" >Show Book List</button></Link>
            <h1>Books Edit</h1>
            <span>Title</span>
                        <div><input type="text" placeholder="Title of the Book" name="title " id="title"  /></div>
                        <span>ISBN</span>     
                        <div> <input type="text" placeholder="ISBN" name="isbn" id="isbn"  /></div>
                        <span>Author</span>
                        <div> <input type="text" placeholder="Author" name="author" id="author" /></div>
                        <span>Discription</span>
                        <div>  <input type="text" placeholder="Description the book" name="desc" id="discription"/></div>
                        <span>Publisher date</span>
                        <div> <input type="date" placeholder="published date" name="date" id="date"  /></div>
                        <span>publisher</span>
                        <div> <input type="text" placeholder="publisher of the book" name="publisher" id="publisher"  /></div>

        </div>
        </>
    )
}
export default BookEdit;