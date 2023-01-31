import React, { useState } from 'react';
import {
    MDBCollapse
} from 'mdb-react-ui-kit';

import { Search } from 'react-bootstrap-icons';

import _ from 'lodash';

const SearchBar = ({ updateNewsData, updateNewsLoadedBool }) =>
{
    // Hooks
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [userSearch, setUserSearch] = useState("");

    const toggleShowSearchBar = () => setShowSearchBar(!showSearchBar);

    const userMadeSearch = () => 
    {
        updateNewsLoadedBool(false);

        // Make an API request to the server to look for news
        fetch("https://news-empire-back-end.onrender.com/search", {
            method: "post",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({newsToSearch : userSearch})
        })
            .then(response => response.json())
            .then(data => {
                updateNewsData(data.newsData)
                updateNewsLoadedBool(true);
            })
            .catch(err => console.log(err));
    }

    const userTypingSearch = (e) => 
    {
        
        setUserSearch(_.kebabCase(e.target.value));
    }

    return(
        <div>
            <button 
            onClick={toggleShowSearchBar}
            className="btn btn-primary">
                Search News
            </button>

            <MDBCollapse show={showSearchBar}>
                <div className="d-flex justify-content-center">
                    <div className="input-group m-3 w-50">

                        <input type="text" onChange={userTypingSearch} class="form-control"/>
                        <div className="input-group-append" name="newsToSearch">

                            <button onClick={userMadeSearch} className="btn btn-primary">
                                <Search />
                            </button>
                        
                        </div>
                    
                    </div>
                </div>
            </MDBCollapse>
        </div>
        );
}

export default SearchBar;