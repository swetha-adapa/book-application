import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import BookList from './components/booklist';
import AddBook from './components/addbook';
import BookDetails from './components/bookdetails';
import BookEdit from './components/bookedit';

const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register"element={<Register/>}></Route>
      <Route path="/booklist"element={<BookList/>}></Route>
      <Route path="/addbook"element={<AddBook/>}></Route>
      <Route path="/bookdetails"element={<BookDetails/>}></Route>
      <Route path="/bookedit"element={<BookEdit/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
