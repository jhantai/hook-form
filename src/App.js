import React from 'react';
import Form from './form/form';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import './App.css'


const App = () => {

  return (
    <div className='App'>
        <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/Form' element={<Form />} />


      </Routes>
    
     

    

    </div>
  );

};


export default App;
