import React from 'react';

import '../../styles/Content.css';

export default function MyPortfolio() {
    return (
        <> 
        <div className='DivClass'>
            <h2 className='TitleClass'>Portfolio: </h2>
            <div class="DesribeClass">
                {/* <a href="https://github.com/saislam10/group-project">GitHub Repo</a> */}
            <form>
                <button type="submit" id="Work1" formaction="https://saislam10.github.io/group-project/">Album Chart</button>
            </form>
            <form>
                <button type="submit" id="Work2" formaction="https://shielded-waters-71876.herokuapp.com">Movie Saver</button>
            </form>
            </div>
        </div>
        </>
    );
}