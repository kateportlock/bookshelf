import React, {useState, useEffect} from "react";
import BooksList from "./BooksList";
import LeftNav from "./LeftNav";

const Home = () => {

    const [latest, setLatest] = useState([]);

    useEffect(() => {

        const fetchLatest = async () => {

        const fetchLatest = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=14`);
        const latest = await fetchLatest.json();
        setLatest(latest.items);

        };

        fetchLatest();

    }, []);


    return(
        <div className="grid">
            <LeftNav />
            <div className="content">
                <h3 className="p1">Check some of the latest 2019 releases below: </h3>
                <hr />
                {latest && <BooksList books={latest} />}
            </div>
            <div className="hiddenDiv"></div>
        </div>
    )
}


export default Home;

