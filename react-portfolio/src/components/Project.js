import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import MyPortfolio from './pages/MyPortfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';

export default function Project() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
        return (
            <div>
                <Header/>
                <AboutMe/>
                <Footer/>
            </div>
          );
    }
    if (currentPage === 'MyPortfolio') {
        return (
            <div>
                <Header/>
                <MyPortfolio/>
                <Footer/>
            </div>
          );
    }
    if (currentPage === 'Contact') {
        return (
            <div>
                <Header/>
                <Contact/>
                <Footer/>
            </div>
          );
    }
    if (currentPage === 'Resume') {
        return (
            <div>
                <Header/>
                <Resume/>
                <Footer/>
            </div>
        )
    }
    else {
      return (
        <div>
            <Header/>
            <Footer/>
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