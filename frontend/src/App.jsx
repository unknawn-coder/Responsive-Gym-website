import { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import BMICalculator from './components/BMIcalculator';
import Footer from './components/Footer';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
      <ToastContainer theme='dark'  position='top-center'/>

   

    </Router>
      
    
  )
}

export default App
