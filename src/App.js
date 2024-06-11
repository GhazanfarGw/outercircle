import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Index from './home/Index';
import Student from './student/Index';
import Schools from './school/Index';
import Employers from './Employers/Index';
import Grassroots from './Grossroot/Index';
import Preloader from './headerfooterpre/proloader';
import Contact from "./Contact/Index";
import Register from './Register/Index';


function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
    {loading ? (
      <Preloader />
    ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/students" element={<Student/>} />
        <Route path="/schools" element={<Schools/>} />
        <Route path="/employers" element={<Employers/>} />
        <Route path="/grassroots" element={<Grassroots/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    )}
  </>
  );
}

export default App;




