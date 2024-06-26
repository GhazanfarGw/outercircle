import React from 'react';
import Dashboard from './Dashboard';
import Header from '../headerfooterpre/header';
import Offer from './Offer';
import Network from './Network';
import Spotlight from './Spotlight';
import Testimonials from './Testimonials';
import Footer from '../headerfooterpre/Footer';

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Offer/>
    <Network/>
    <Spotlight/>
    <Testimonials/>
    <Footer/>

    </>
  )
}
