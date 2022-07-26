import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import MyPortfolio from './pages/MyPortfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
        return (
            <div>
                <Header/>
                <AboutMe/>
            </div>
          );
    }
    if (currentPage === 'MyPortfolio') {
        return (
            <div>
                <Header/>
                <MyPortfolio/>
            </div>
          );
    }
    if (currentPage === 'Contact') {
        return (
            <div>
                <Header/>
                <Contact/>
            </div>
          );
    }
    if (currentPage === 'Resume') {
        return (
            <div>
                <Header/>
                <Resume/>
            </div>
        )
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}