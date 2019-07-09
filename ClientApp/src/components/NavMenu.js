import React, { Component } from 'react';
// import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name
    
  state = {
    searchTerm: ''
  }
  
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  search = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm)
  }
  
  render() {
   
    const { socialMediaLinks } = this.props;
    const linksList = socialMediaLinks.map(socialMediaLink => {
      return (
        <li className="nav-item" key={socialMediaLink.id}>
          <a className="nav-link" href={ socialMediaLink.url }>{ socialMediaLink.name }</a>
        </li>
      )
    })

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Contact</a>
              </li>
              { linksList }
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit= {this.search} >
              <input className="form-control mr-sm-2 col-8" type="text" placeholder="Search" onChange={this.handleChange}/>
              <button className="btn btn-outline-success m-2 my-sm-0 text">Search</button>
            </form>

          </div>
        </div>
      </nav>
    );
  }
}
