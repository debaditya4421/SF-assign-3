import { Link } from "react-router-dom";
const Price2 = ({bks}) => {
    const bp12 = bks.books.filter(book => book.price <= '$41.99');
    return (
        <div>
            {bp12.map((book)=>(
            <div className="ListOfbks">
                <div className="eachbk">
                    <div className="b1">
                        <img src={book.image}></img>
                    </div>
                    <h3>{book.title}</h3>
                    <h3>{book.price}</h3>
                    <Link to='/Cart'><button>Add to Cart</button></Link>
                </div>
            </div>
        ))}
        </div>
    );
}
 
export default Price2;