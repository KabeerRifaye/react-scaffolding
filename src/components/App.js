import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
				{/* Navbar */}
				<nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>
							<a className="navbar-brand" href="#/" />
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="about">About</Link></li>
							</ul>
						</div>
					</div>
				</nav>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;