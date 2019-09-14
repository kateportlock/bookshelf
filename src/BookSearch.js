import React, {useEffect, useState} from 'react';
import BooksList from "./BooksList";
import LeftNav from "./LeftNav";

const BookSearch = () => {
 
  const[books, setBooks] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('');
  const[loading, setLoading] = useState(false);
  const[searching, setSearching] = useState(true);

  useEffect(() => {

    const APP_KEY = `${process.env.REACT_APP_API_KEY}`;

    const getBooks = async () => {

      if(query){
        setLoading(true);
        setSearching(false);

        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${APP_KEY}`);
        const data = await response.json();
        
        setBooks(data.items);
        setLoading(false);
      }
    }

    getBooks();
    
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
      <div>
        <div className="grid">
          <LeftNav />
          <div className="content">
            <form className="formContainer" onSubmit={getSearch}>
              <input className="searchInput" type="text" value={search} onChange={updateSearch} placeholder="Search for an author or a title..." required/>
              <button className="btnSearch" type="submit">Search</button>
            </form>
            {
              loading && <div className="loader"><i className="fa fa-spinner fa-spin"></i> Searching for "<strong>{query}</strong>" ...</div>
            }
            {
              searching &&  <p>Search from thousands of books <span role="img" aria-label="emoji" className="emoji2"> &#128270;</span> </p> 
            }
            <BooksList books={books}/>
          </div>
        </div>
        <div className="hiddenDiv"></div>
      </div>
    )
}

export default BookSearch;