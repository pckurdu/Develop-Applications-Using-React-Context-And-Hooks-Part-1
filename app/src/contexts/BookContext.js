//Import the useState function to create state
import React,{createContext,useState} from 'react';
//import uuid
import uuid from 'uuid/v1';
//Generate context using the createContext function
export const BookContext=createContext();


//create functional componet
const BookContextProvider=(props)=>{

    //create state using useState
    const [books,setBooks]=useState([
        {title:'Metamorphosis',author:'Franz Kafka',id:1},
        {title:'Animal Farm',author:'George Orwell',id:2}
    ]);
    //add new book and use uuid
    const addBook=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}]);
    }

    //remove book 
    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!==id));
    }
    return(
        //with books addBook removeBook
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {/* To access context objects */}
            {props.children}
        </BookContext.Provider>
    )
}

//export component
export default BookContextProvider;