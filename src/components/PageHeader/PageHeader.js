import React from 'react';
import newsPic from './news.png';
import Tilt from 'react-parallax-tilt';
import SearchBar from "../SearchBar/SearchBar";

import "./PageHeader.css";
import "../../utilities/CSS/fonts.css";

class PageHeader extends React.Component
{
    render()
    {
        const {windowWidth, updateNewsData, updateNewsLoadedBool} = this.props;
        return (
            <header>
              <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>News Maximus</h1>
                {
                windowWidth >= 1200 
                ? 
                <Tilt>
                    <div className="Tilt-container">
                        <img src={newsPic} alt="News Maximus Logo"/>
                    </div>
                </Tilt>
                :
                <img src={newsPic} className="smallPic" alt="News Maximus Logo"/>
                }
                <h3 className='mb-3'>The Empire of News</h3>
                <SearchBar updateNewsData={updateNewsData} updateNewsLoadedBool={updateNewsLoadedBool}/>
              </div>
            </header>
            );
    }
}

export default PageHeader;