import React from 'react'
import Header from '../headerfooterpre/header';
import Dashboard from './Dashboard';
import Impact from './Impact';
import Partners from './Partner'
import Ourpost from './Ourpost';
import Testimonials from './Testimonials'
import Future from './Future';
import Footer from '../headerfooterpre/Footer';

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Impact/>
    <Partners/>
    <Ourpost/>
    <Future/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
