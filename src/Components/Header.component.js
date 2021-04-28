import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MapContainer from "./MapContainer.component"
import BillingAddressForm from "./BillingAddressForm.component"
import ServiceAddressForm from "./ServiceAddressForm.component"

export function Header () {
    return(
        <div className="header">
            <Router>
           <h1 className="header-element"><Link to="/">Service Address</Link></h1>
           <h1 className="header-element"><Link to="/map">Map</Link></h1>
           <h1 className="header-element"><Link to="/quote">Quote</Link></h1>
          
        <hr />

        <Switch>
          <Route exact path="/">
            <ServiceAddressForm />
          </Route>
          <Route path="/map">
            <MapContainer />
          </Route>
          <Route path="/quote">
            <BillingAddressForm />
          </Route>
        </Switch>
      
    </Router>
        </div>
    )
    
}