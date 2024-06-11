import React from 'react'
import Header from '../headerfooterpre/header';
import Dashboard from './Dashboard';
import Story from './Story'
import Team from './Team';
import Founder from './Founder';
import Footer from '../headerfooterpre/Footer';

export default function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Story/>
    <Team/>
    <Founder/>
    <Footer/>
    </>
  )
}
