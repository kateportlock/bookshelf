import React from 'react';

const Book = ({title, authors, img}) => {
    return(

        <div className="gridItem">
            {img && <img className="bookCover" src={img} alt='book'/>}
            <h3>{title}</h3>
            {authors && authors.map((author, i) => (
            <h5 key={i}>{author}</h5>
            ))}
        </div>
    )
}

export default Book;




