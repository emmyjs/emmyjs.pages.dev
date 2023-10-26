import { load, Router, Route } from "emmy-dom";

import "./Home.js";
import "./Docs.js";
import "./Contact.js";
import "./components/Header.js";
load('/Code404.html', 'Code404');

function App () {
  this.behave('div');
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full text-white box-border';

  this.callback = () => {
    this.querySelector('Router').className += ' box-border';
  }

  return /*html*/`
    <Header></Header>
    <Route href="/" to="Home"></Route>
    <Route href="/docs" to="Docs"></Route>
    <Route href="/404" to="Code404"></Route>
    <Route href="/contact" to="Contact"></Route>
    <Router></Router> 
  `;
}

load(App, 'App');
