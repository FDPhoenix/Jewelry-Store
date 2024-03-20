import React from 'react';
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Contact from '../Components/Contact';


function AboutPage() {
    return (
        <div>
            <Header />
            <Banner name='Final Project' title='Group 4 | Apple China Store' />
            <About />
            <Contact />
        </div>
    )
}

export default AboutPage
