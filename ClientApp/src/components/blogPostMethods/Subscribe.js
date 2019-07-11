import React, { Component } from 'react';
import '../styles/Subscribe.css'

export class Subscribe extends Component {
    state = {
        email: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div id="subscribe-component" className="p-2 mb-3 mt-2 mt-md-0 bg-shadowblue white-border">
                <p>Sign up for our Newsletter!</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-md-11 mx-auto">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" className="form-control" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-dark border" onClick={this.handClick}>Subscribe</button>
                    </div>
                </form>
            </div>
        )
    }
}