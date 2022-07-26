import React from 'react';

import '../styles/Nav.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='navbar'>
      <a id='Contact' href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      <a id='Resume' href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
      <a id='MyPortfolio' href="#MyPortfolio" onClick={() => handlePageChange('MyPortfolio')} className={currentPage === 'MyPortfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
      <a id='AboutMe' href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About me</a>
    </div>
  );
}

export default Nav;