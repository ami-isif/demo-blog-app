import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import AllBlogPosts from './AllBlogPosts';
import Footer from './Footer';
import heroImage from '../resources/images/foodis-medicine.jpg';

function Home() {
    return(
    <>
    <NavBar />
    <Hero img={heroImage} title="AMMY'S BLOG" subtitle="welcome to the home of health"/>
    <AllBlogPosts/>
    <Footer />
   </>
    );
}

export default Home;