import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <div className="jumbotron">
          <h1>Home Page</h1>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;