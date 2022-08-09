import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const Price1 = ({bks}) => {
    // const [bp1,setbp1] = useState(null);
    const bp11 = bks.books.filter(book => book.price <= '$21.99');
    console.log(bp11);
    return (
        <div>
            {bp11.map((book)=>(
            <div className="ListOfbks">
                <div className="eachbk">
                    <h3>{book.title}</h3>
                    <h3>{book.price}</h3>
                    <Link to='/Cart'><button>Add to Cart</button></Link>
                </div>
            </div>
            
        ))}
        
        </div>
    );
}
 
export default Price1;