import React, { Component } from 'react'

export class AddBlogPost extends Component {
    state = {
        author: null,
        image: null,
        subject: null,
        content: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        return(
            <div class="col-12 col-lg-6 mx-auto mt-5">
                <form>
                    <div className="form-group">
                        <label htmlFor="author">Author: </label>
                        <input type="text" id="author" class="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image Path: </label>
                        <input type="text" id="image" class="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject: </label>
                        <input type="text" id="subject" class="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content: </label>
                        <textarea type="text" id="content" class="form-control" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="text-right">
                        <button class="btn btn-outline-dark">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}