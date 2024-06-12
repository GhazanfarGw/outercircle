import React from 'react'
import Header from '../headerfooterpre/header';
import Dashboard from './Dashboard';
import Changing from './changing';
import Outreach from './outreach';
import Testimonials from './Testimonials';
import Partner from './Partner';
import Footer from '../headerfooterpre/Footer';

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Changing/>
    <Outreach/>
    <Testimonials/>
    <Partner/>
    <Footer/>
    </>
  )
}
