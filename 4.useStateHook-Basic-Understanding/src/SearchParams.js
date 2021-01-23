import { type } from 'os';
import React, { useState } from 'react';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    console.log(location);
    console.log(typeof location);
    console.log(typeof setLocation);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="Location"
                        onChange={event => setLocation(event.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;