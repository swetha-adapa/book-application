
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./addbook.css";
const AddBook = () => {
    const navigate=useNavigate()
    const [data, setData] = useState({
        file:null,
        title:"",
        author:"",
        location:"",
        desc:"",
        date:"",
        publisher:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData =new FormData()
        formData.append("title",data.title)
        formData.append("isbn",data.isbn)
        formData.append("author",data.author)
        formData.append("desc",data.desc)
        formData.append("date",data.date)
        formData.append("publisher",data.publisher)
        formData.append("file",data.file)
        axios.post(
            "http://localhost:3005/upload",
            formData,
            {"content-type":"multipart/form-data"}
        )
        navigate("/booklist")
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(prevData=>({...prevData,[name]:value}))
    }
    const handleUpload=(e)=>{
        const uploadedfile=e.target.files[0]
        setData(prevData=>({...prevData,file:uploadedfile}))
    }
    return (
        <>
            <div className="main">
                  
        <Link to="/booklist"><button className="btn2" >Show Book List</button></Link>
    
                <div className="addbook">
                    <h1 className="add">Add Book</h1>
                    <p>Create new book</p>
                </div>
                <form id="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="forma">
                        
                        <div><input id="filetype" type="file" name="file" onChange={handleUpload} /></div>
                        <div><input type="text" placeholder="Title of the Book" name="title " id="title" onChange={handleChange} /></div>
                        <div> <input type="text" placeholder="ISBN" name="isbn" id="isbn" onChange={handleChange} /></div>
                        <div> <input type="text" placeholder="Author" name="author" id="author" onChange={handleChange} /></div>
                        <div>  <input type="text" placeholder="Description the book" name="desc" id="discription" onChange={handleChange} /></div>
                        <div> <input type="date" placeholder="published date" name="date" id="date" onChange={handleChange} /></div>
                        <div> <input type="text" placeholder="publisher of the book" name="publisher" id="publisher" onChange={handleChange} /></div>

                        
                   <button className="btn3" type="submit">submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddBook;

