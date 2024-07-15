import React from 'react'
import Header from '../headerfooterpre/header';
import Dashboard from './Dashboard';
import Expect from './Expect';
import Help from './help';
import Event from './event';
import Ourpost from '../Employers/Ourpost';
import Tiktok from './tittok'
import Testimonials from './Testimonials';
import Footer from '../headerfooterpre/Footer';

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Expect/>
    <Help/>
    <Event/>
    <Ourpost/>
    <Tiktok/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
