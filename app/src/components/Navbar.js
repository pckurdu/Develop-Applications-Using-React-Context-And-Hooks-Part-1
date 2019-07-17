import React,{useContext} from 'react';

import {BookContext} from '../contexts/BookContext';

const Navbar=()=>{
    //access book context
    const {books}=useContext(BookContext);
    return(
        <div className="navbar">
            <h1>PCKURDU Book List</h1>
            {/* show book length use context */}
            <p> There are {books.length} books</p>
        </div>
    )
};


export default Navbar;