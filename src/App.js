import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import logo from './logo.svg';
import './App.css';
import Trans from './Component/Transform/Trans';
import  Grid from  './Component/Grid/Grid';
import Partner from './Component/Partners/Partner';
import Text from './Component/Text/Text';
import Media from './Component/Medias/Media';
// import { render } from '@testing-library/react';
import {motion} from 'framer-motion'
function  App(){
  return(
    <div classame="App">
       <Navbar/>
       <Trans/>
       <Grid/>
       <Partner/>
       <Text/>
       <Media/>
    </div>
  );
}   
export default  App;