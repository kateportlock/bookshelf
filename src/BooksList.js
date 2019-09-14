import React from "react";
import Book from "./Book";
import {Link} from 'react-router-dom';
import * as noimage from "./no-image.png";

const BooksList = ({books}) => {
    return(
        <div className="grid-container">
            {books && books.map((book, i) => (
                <Link key={book.id} to={`/booksearch/${book.id}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <Book key={i} title={book.volumeInfo.title} authors={book.volumeInfo.authors} img={book.volumeInfo.imageLinks === undefined ? noimage : book.volumeInfo.imageLinks.thumbnail }/>   
                </Link>
            ))}  
        </div>
    )
}

export default BooksList;



