import React from 'react';

import '../../styles/Content.css';
import me from '../../images/Me.png'
export default function AboutMe() {
    return (
        <> 
        <div className='DivClass'>
            <h2 className='TitleClass'>About Me: </h2>
            <img src={me} className='Image' alt="Safwan Islam"> 
            </img>
            <p className='DescribeClass'> Hello! I am Safwan Islam. I currently attend Davidson College and will be a
                third-year in the fall! As of now, I am working through the UNC Charlotte coding bootcamp, and
                have created my first two projects! The first project is a front-end project which takes in a few APIs and
                manipulates them
                to get music data, specifically the top three albums based on the current week, and returns various
                info for those artists who have albums in the top three. My second project is a movie search engine.
                The user can log in and search movies and then save and delete them. Enjoy!
             </p>
        </div>
        </>
    );
}