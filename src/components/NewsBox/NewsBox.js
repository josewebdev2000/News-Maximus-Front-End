import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import "./NewsBox.css";
import { isEqual } from 'lodash';

class NewsBox extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            imgRatio: 0.25
        };
    }

    arrangeImgDims = () => {

        const {windowWidth} = this.props;

        if (windowWidth >= 1200)
        {
            this.setState(() => ({imgRatio: 0.25}));
        }

        else if (windowWidth >= 768 && windowWidth < 992)
        {
            this.setState(() => ({imgRatio: 0.5}));
        }

        else if (windowWidth >= 576 && windowWidth < 768)
        {
            this.setState(() => ({imgRatio: 0.75}));
        }
    }

    componentDidUpdate(prevProps)
    {
        if (!isEqual(prevProps, this.props))
        {
            this.arrangeImgDims();
        }
    }

    render()
    {
        const {windowWidth, newsTitle, imgLink, summary, newsLink} = this.props;

        return (
            <MDBCard alignment="center">
            <MDBCardBody>
                <MDBCardTitle>{newsTitle}</MDBCardTitle>
                <MDBCardLink
                className="imageLink" 
                href={newsLink} 
                target="_blank">
                    <MDBCardImage 
                    className="imageCardLink" 
                    position='top' 
                    alt='News Image Link'
                    style={{width: windowWidth * this.state.imgRatio}}
                    src={imgLink}
                />
            </MDBCardLink>
            </MDBCardBody>
            <MDBListGroup flush>
                <MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardText>{summary}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBCardLink className="newsLink btn btn-dark btn-block" href={newsLink} target="_blank">Link to News</MDBCardLink>
                    </MDBListGroupItem>
                </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
        );
    }
}

export default NewsBox;