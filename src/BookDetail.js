import React, {useEffect, useState} from "react";
import * as noimage from "./no-image.png";
import LeftNav from "./LeftNav";

const BookDetail = ({ match }) => {

    const [book, setBook] = useState('');

    const regex = /(<([^>]+)>)/ig;

    useEffect(() => {

        const fetchBook = async () => {

        const fetchBook = await fetch(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`);
        const book = await fetchBook.json();
        setBook(book);

        };

        fetchBook();

    }, []);
    
    return (
        <div className="grid">
            <LeftNav />
            <div className="bookCard">
                <div className="bookCardCover">
                    {book && <img className="bookCoverDetail" src={book.volumeInfo.imageLinks.small ? book.volumeInfo.imageLinks.small : noimage} alt={book.volumeInfo.title} />}
                </div>
                <div className="bookCardContent">
                    {book && <h1>{book.volumeInfo.title}</h1>}
                    <hr />
                    {book && book.volumeInfo.authors.map((author, i) => (
                    <h3 key={i}>{author}</h3>
                    ))}
                    {book && <h4>Category/genre: {book.volumeInfo.categories ? book.volumeInfo.categories[0] : 'Unknown'}</h4>}
                    {book && <h4>Published by {book.volumeInfo.publisher}</h4>}
                    <h2>About this book:</h2>
                    {book && <p>{book.volumeInfo.description ? book.volumeInfo.description.replace(regex, "") : 'No description available at the moment'}</p>}
                    {book && <h4>Release date: {book.volumeInfo.publishedDate}</h4>}
                    {book && <h4>Page count: {book.volumeInfo.pageCount}</h4>}
                    {book && <a href={'' + book.accessInfo.webReaderLink} target="_blank" rel="noopener noreferrer"><button>Read</button></a>}
                    {book && <a href={'' + book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><button>Find out more</button></a>}
                </div>
            </div>  
        </div>
    );

}

export default BookDetail;

