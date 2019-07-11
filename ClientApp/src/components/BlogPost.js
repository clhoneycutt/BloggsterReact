import React from 'react';
import { Subscribe } from './blogPostMethods/Subscribe'
import { Labels } from './blogPostMethods/Labels'
import './styles/BlogPost.css'

export const BlogPost = (props) => {
    return(
        <div className="mb-5 row">
            <div id="blog-card" className="col-md-7 ml-auto bg-shadowblue">
                <h1 className="display-4 text-center mt-3">Blog Title</h1>
                <hr/>
                <img src="http://placekitten.com/g/600/400" alt="" className="mx-auto mt-3 col-12 "/>
                <p id="image-description" className="text-center"><small>Kitty. Lookin smol.</small></p>

                <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. </p>

                <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. </p>

                <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. </p>

                <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>

                <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>


            </div>
            <div className="col-12 col-md-3 mr-auto">
                <div id="subscribe" className="text-center">
                    <Subscribe />
                </div>
                <Labels className="my-2" />
            </div>
        </div>
    );
}

