import React from 'react';
import profilePic from './GitHub-Profile-Pic.jpeg';
import './PageFooter.css';

import {
    MDBFooter,
    MDBContainer,
    MDBTooltip,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';


class PageFooter extends React.Component
{
    render()
    {
        return (
            <MDBFooter color='white' bgColor='dark'>
                <MDBContainer fluid>

                    <MDBRow around className="rowContainer">

                        <MDBCol lg="4" md="6">
                            <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Go to my GitHub Profile">
                                <a href="https://github.com/josewebdev2000" target="_blank" rel="noreferrer">
                                    <img className="profile-pic rounded-circle" src={profilePic} alt="GitHub Profile" />
                                </a>
                            </MDBTooltip>
                        </MDBCol>

                        <MDBCol className="align-self-center" lg="4" md="6">

                            <h3 className="copy-n-name">&copy; josewebdev2000</h3>
                        
                        </MDBCol>
                    
                    </MDBRow>
                
                </MDBContainer>
            </MDBFooter>
        );
    }

}

export default PageFooter;