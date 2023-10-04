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


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<PageLayout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/car' element={<CAR/>} />
    <Route path='/bike' element={<BIKE/>} />
    <Route path='/life' element={<LIFE/>} />   
    </Route >

  ))

  return(
    
    <RouterProvider router={router}/>

  );
}

export default App
