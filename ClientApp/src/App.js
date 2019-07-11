import React, { Component } from 'react';
import { NavMenu } from './components/NavMenu';
import { BlogPost } from './components/BlogPost';
import { AddBlogPost } from './components/AddBlogPost'

export default class App extends Component {
    displayName = App.name

    state = {
        socialMediaLinks : [
            { name: 'Facebook', url: 'https://www.facebook.com/clhoneycutt', id: 1 },
            { name: 'Twitter', url: 'https://www.twitter.com/clhoneycutt', id: 2 },
            { name: 'Instagram', url: 'https://www.instagram.com/clhone', id: 3 },
        ],
        blogPosts : [
            {}
        ],
        blogPost: null
    }

    render() {
        return (
            <div>
                <div className="container">
                <h1 className="display-1 pb-2">Bloggster</h1>
                </div>
                <NavMenu socialMediaLinks={this.state.socialMediaLinks} />
                <div className="container">

                {/* Temporary for building components */}
                <div className="px-2">
                    <BlogPost blogPost={this.state.blogPost} />
                </div>

                </div>
            </div>
        );
    }
}
