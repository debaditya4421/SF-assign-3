import { Link } from "react-router-dom";
import { useState } from 'react';
const BookList = ({books,cbooks}) => {
    const [cart,setCart] = useState(["erf"]);
    const hcart = (namep) => {
        const newlt = [...cart , "namep"];
        setCart(newlt);
        // cart.concat("namep");
        console.log(namep);
        console.log(cart);
    } 
    return (
        <div className="BookLt">
            <h2>BooksList</h2>
            {books.books.map((book)=>(
                <div className="ListOfbks">
                    <div className="eachbk">
                        <div className="b1">
                            <img src={book.image}></img>
                        </div>
                        {/* <h3>{book.title}</h3> */}
                        <Link to='/Cart'><button onClick={() => hcart(book.title)}>Add to Cart</button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
// onClick={hcart}
export default BookList;