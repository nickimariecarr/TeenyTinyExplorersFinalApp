import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from './Components/MainHeader';
import outside from './outside.mp4';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


import './App.css';

//pages
import Home from './Components/home';
import About from './Components/about';
import BecomeaHost from './Components/BecomeaHost';
import Contact from './Components/contact';
import Login from './Components/login';

//elements
import {Container, Row, Col, Button} from 'react-bootstrap';

//assets
import FindaGroup from './Components/FindaGroup';
import Signup from './Components/SignUp';

class App extends React.Component{
  render(){
  return (
        <div className="App">
          <div>
          <header className="App-header">
            <video width="100%" height="100%" autoPlay loop defaultMuted playsInline muted>
              <source src={outside} type="video/mp4"/>
            </video>
              <MainHeader />
          </header>
                    <div>
 <nav>
        <ul id="navigation">

          <li>
            <Link to='./home'>
              Home
            </Link>
          </li>
          <li>
            <Link to='./about'>
              About
            </Link>
          </li>
          <li>
            <Link to='./BecomeaHost'>
              Become a Host
            </Link>
          </li>
          <li>
            <Link to='./contact'>
              Contact
            </Link>
          </li>
          <li>
            <Link  to='./FindaGroup'>
              Find a Group
            </Link>
          </li>
          <li>
            <Link  to='./login'>
              Login
            </Link>
          </li>
          <li>
            <Link to='./SignUp'>
              Sign Up 
            </Link>
          </li>
        </ul>
      </nav>
          </div>

            <main fluid>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/BecomeaHost' element={<BecomeaHost />} />
                <Route path='/findagroup' element={<FindaGroup />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
            </main>
        </div>

        <div className="color-nav" style={{display: "flex", alignItems:'center',height: "30px"}}>
              <Container >
                <footer className="color-nav" >
                    © Teeny Tiny Explorers 2021

                </footer>
              </Container>
          </div>
    </div>
  );
}
}

export default App;
      