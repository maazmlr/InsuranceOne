import './App.css'
import {NextUIProvider} from '@nextui-org/react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,RouterProvider,Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './components/Home/Home';
import Promotions from './components/Home/Promotions';
import Contact from './components/Contact/contact';
import About from './components/about/about';
import CAR from './components/Takaful_&_Insurence/Car Takaful/car';
import BIKE from './components/Takaful_&_Insurence/Car Takaful/bike/bike';
import LIFE from './components/Takaful_&_Insurence/Car Takaful/life/life';
import HEALTH from './components/Takaful_&_Insurence/Car Takaful/health/health';
import Signin from './components/signIn/signIn';
import SignUp from './components/SignUp/signUp';
import Accordion from './components/Home/Accordian';
import UncontrolledExample from './components/Takaful_&_Insurence/TestCarousel';
import { InsuranceLayout } from './components/Takaful_&_Insurence/InsuranceLayout';
import TestimonailCard from './components/Takaful_&_Insurence/TestimonailCard';


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<PageLayout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='about' element={<About/>} />
    <Route path='insurance' element={<InsuranceLayout/>}>
    
    <Route index element={<CAR/>} />
    <Route path='bike' element={<BIKE/>} />
    <Route path='life' element={<LIFE/>} />   
    <Route path='health' element={<HEALTH/>} />  
    </Route> 
    <Route path='signIn' element={<Signin/>} />  
    
    <Route path='signup' element={<SignUp/>} />
    </Route >

  ))

  return(
    
    <RouterProvider router={router}/>
    // <TestimonailCard/>
  );
}

export default App
