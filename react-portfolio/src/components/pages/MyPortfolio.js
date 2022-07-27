import React from 'react';

import '../../styles/Content.css';

export default function MyPortfolio() {
    return (
        <> 
        <div className='DivClass'>
            <h2 className='TitleClass'>Portfolio: </h2>
            <div class="GH">
                <a href="https://github.com/saislam10/group-project">GitHub Repo</a>
            </div>
            <form>
                <button type="submit" id="Work" formaction="https://saislam10.github.io/group-project/">Album
                    Chart!</button>
            </form>
        </div>
        </>
    );
}