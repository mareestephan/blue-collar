import React from 'react';

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';

import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SeekerSignUpPage from './pages/SeekerSignUpPage';
import CreateListingPage from './pages/CreateListingPage';


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
    errorElement: <NotFoundPage /> 
  }, 
  {
    path:'/signup',
    element: <SeekerSignUpPage />,
  }, 
  {
    path:'/create-listing',
    element: <CreateListingPage/>,
  },
])
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
