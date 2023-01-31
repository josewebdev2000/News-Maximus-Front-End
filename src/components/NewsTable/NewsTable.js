import React from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import NewsBox from '../NewsBox/NewsBox';

class NewsTable extends React.Component
{
    /**
     * Accept as props:
     * windowWidth -> For every news box
     * newsBoxesData -> Array of objects containing required data to display news boxes
     * Structure of newsBoxesData: 
     * [{
     * newsTitle: {value}, imgLink: {value}, summary: {value}, newsLink: {value}
     * }]
     */

    /* <NewsBox
            windowWidth={windowWidth} 
            newsTitle={"Why We're All Obsessed With ChatGPT, A Mind-Blowing AI Chatbot"} 
            imgLink={`https://www.cnet.com/a/img/resize/084641681c8362c3ce0c3eb8a53365351adcaaac/hub/2022/12/06/3dd7180c-d0e7-47ca-bc37-b5df15a41a25/ai-chat-gettyimages.jpg?auto=webp&fit=crop&height=630&width=1200`} 
            summary={"This artificial intelligence bot can converse, write poetry and program computers. Be careful how much you trust it, though."} 
            newsLink={"https://www.cnet.com/tech/computing/why-were-all-obsessed-with-chatgpt-a-mind-blowing-ai-chatbot/#ftag=CAD590a51e"}/> 
    */ 

    render()
    {
        const {windowWidth, newsBoxesData} = this.props;

        return (
            <MDBContainer fluid className="bg-secondary">

                <MDBRow center className="d-flex align-items-end">
                    {
                        newsBoxesData.map((newBox, i) => {

                            return (
                                <MDBCol lg="4" md="6" className="p-3">
                                    <NewsBox 
                                    key={i}
                                    windowwidth={windowWidth}
                                    newsTitle={newBox.newsTitle}
                                    imgLink={newBox.imgLink}
                                    summary={newBox.summary}
                                    newsLink={newBox.newsLink}
                                    />
                                </MDBCol>
                            );
                        })
                    }
                </MDBRow>

            </MDBContainer>
        );
    }

}

export default NewsTable;