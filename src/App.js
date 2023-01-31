import React from 'react';

import './App.css';

// Components
import PageHeader from './components/PageHeader/PageHeader';
import NewsTable from './components/NewsTable/NewsTable';
import Loading from './components/Loading/Loading';
import PageFooter from './components/PageFooter/PageFooter';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      newsData: [],
      newsLoaded: false
    };
  }

  updateDimensions = () => 
  {
    /* Change screen dimensions of React App */
    this.setState(() => ({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }));

  }

  updateNewsLoadedBool = (newBool) => 
  {
    /* Method that allows child components to change newsLoaded state */
    this.setState(() => ({newsLoaded: newBool}));
  }

  updateNewsData = (updatedNewsData) => 
  {
    /* Method that allows child components to change newsData state of this app */
    this.setState(() => ({newsData: updatedNewsData}));
  }

  requestAllNews = () => {

    // Make POST request to receive normal information from the server
    fetch('https://news-empire-back-end.onrender.com/')
      .then(response => response.json())
      .then(newsObjs => {
        this.setState(() => ({newsData : newsObjs.newsData}));
        this.setState(() => ({newsLoaded: true}));
      })
      .catch(error => console.log(error));
  }

  componentDidMount()
  {
    window.addEventListener('resize', this.updateDimensions);
    this.requestAllNews();
  }

  componentWillUnmount()
  {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render()
  {
    const {windowWidth, newsLoaded, windowHeight, newsData} = this.state;

    if (newsLoaded)
    {
      return (
        <div className="App">
          <PageHeader updateNewsData={this.updateNewsData} updateNewsLoadedBool={this.updateNewsLoadedBool} 
          windowWidth={windowWidth} windowHeight={windowHeight}/>
          <NewsTable windowWidth={windowWidth} newsBoxesData={newsData}/>
          <PageFooter/>
        </div>
      );
    }

    else
    {
      return (
        <div className="App">
          <PageHeader updateNewsData={this.updateNewsData} windowWidth={windowWidth} windowHeight={windowHeight}/>
          <Loading />
          <PageFooter/>
        </div>
      );
    }
  }
}

export default App;
