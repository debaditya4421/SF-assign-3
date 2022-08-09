import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';
// import Horror from './Horror';
import Cart from "./Cart";
import BookList from "./BookList";
import Price1 from "./Price1";
import Price2 from "./Price2";
import Price3 from "./Price3";

function App() {

  const [click, setClick] = useState(false);
  const clickme = () => {
    if (click === false) { setClick(true); }
    if (click === true) { setClick(false); }

  }

  const [books,setBooks] = useState(null);
  const [cbooks,setcBooks] = useState(null);
  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setBooks(data);
      // setcBooks(data);
    });
  },[]);
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <div><nav>
              <div className="img" onClick={clickme}>
                <img src='https://thumbs.dreamstime.com/b/hamburger-menu-bar-icon-flat-black-round-button-vector-illustration-design-isolated-142986835.jpg' ></img>
              </div>
              <h1>Menu</h1>
            </nav>
              <div>
                {click && <Sidebar />}
              </div>
              <h4>BROWSE GENRES</h4>
              <div className="Images-page1">
              <div className="img1" >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsqZSUxdz_5eDMhg4g9afn3SuBplFUtM0xA&usqp=CAU' ></img>
                <h3 className="name-genre">MYSTERY & THRILLER</h3>
              </div>
              </div>
            </div>
          }
        />
        <Route path='/Horror'
        element={
          <div> 
            {books && <BookList books={books} cbooks={cbooks} />}  </div>
        }
        />
        <Route path='/Price1'
        element={
          <div> <Price1 bks={books}/> </div>
        }
        />
        <Route path='/Price2'
        element={
          <div> <Price2 bks={books}/> </div>
        }
        />
        <Route path='/Price3'
        element={
          <div> <Price3 bks={books}/> </div>
        }
        />
        <Route path='/Cart'
        element={
          <div> <Cart cbks={cbooks} /> </div>
        }
        />

      </Routes>
    </BrowserRouter>



    // <div className="App">



    //   <div>

    //   </div>
    // </div>

  );
}

export default App;
