import React from 'react';
import './app';
import Navbar from "./components/navbar";
import  Content  from "./components/content";
import  Contend1  from './components/contend1';
import Start from './components/start';
import Chose from "./components/chose";
import  Jobs  from './components/jobs';
import { Footer, Plan, Says } from './components/';


export default class app extends React.Component {
  render() {
    return (
<div >
<Navbar/>
<Content/>
<Contend1/>
<Start/>
<Chose/>
<Jobs/>
<Says/>
<Plan/>
<Footer/>
</div>
    )
  }
}