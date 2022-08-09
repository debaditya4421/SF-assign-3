import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Horror from './Horror';

const sidebar = () => {

    return (

        <div className="Sidebar-menu">
            <Link to='/Horror' className="sm">List of Available Books</Link>
            <Link to='/Price1' className="sm">Price 1</Link>
            <Link to='/Price2' className="sm">Price 2</Link>
            <Link to='/Price3' className="sm">Price 3</Link>
        </div>


    );
}
// http://localhost:3000
// npm run start
export default sidebar;