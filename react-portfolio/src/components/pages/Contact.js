import React from 'react';

import '../../styles/Content.css';

export default function Contact() {
    return (
        <> 
        <div className='DivClass'>
            <h2 className='TitleClass'>Contact: </h2>
            <div className='DescribeClass'>
            <h3>Name: </h3>
            <form >
                <input type="text"></input>
                <h3>Email Address: </h3>
                <input type="text"></input>
                <h3>Message: </h3>
                <input className='messageBox' type="text"></input>
                <h3>Send:</h3>
                <input className="submitBtn" type="submit"></input>
            </form>
        </div>
        </div>
        </>
    );
}