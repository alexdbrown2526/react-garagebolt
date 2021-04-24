import './App.css';
import React from 'react'
import  MapContainer  from './Components/Map.component';
import { Quote } from './Components/Quote.component';
import { ServiceAddress } from './Components/ServiceAddress.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Service Address</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <ServiceAddress />
          </Route>
          <Route path="/map">
            <MapContainer />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
