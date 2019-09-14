import React from 'react';

const LeftNav = () => {

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className="opening">
            <h2>Welcome to BookShelf!</h2>
            <span role="img" aria-label="emoji" className="emoji">&#9749;</span>     
            <h3>Happy {days[today.getDay()]}!</h3>       
        </div>
    )
}


export default LeftNav;