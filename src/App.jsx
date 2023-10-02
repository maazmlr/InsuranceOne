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


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<PageLayout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    </Route >

  ))

  return(
    
    <RouterProvider router={router}/>

  );
}

export default App
