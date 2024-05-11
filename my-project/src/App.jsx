import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Extra from './components/Extra';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import About from './components/About';
import Contactform from './components/Contactform';
import Footer from './components/Footer';
import { useState } from "react";

import { Analytics } from '@vercel/analytics/react';

const Dashboard = () =>{
  return<div>
        <Header />
        <About />
        <Contactform />
        <Footer />
  </div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/extra",
    element: <Extra />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
  <Analytics />
    </div>
  );
}

export default App;