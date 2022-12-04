import React, { useState, useEffect } from "react";

import {Link, useNavigate} from "react-router-dom";
import "./bookdetails.css";

const  BookDetails=()=>{

    return (
        <>
        <div className="main">
            
                  
        <Link to="/booklist"><button className="btn2" >Show Book List</button></Link>
        <h1>book's Record</h1>
      <div>
        <button className="btn4" >Detete Book</button> 
        <Link to="/bookedit"><button className="btn5" >Edit Book </button></Link>
        
        </div>
        </div>
        </>
    )
}
export default BookDetails
