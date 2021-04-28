import React from 'react'
import ServiceAddressForm from './Components/ServiceAddressForm.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './Components/Header.component';


export default function App() {
  return (
    <div>
      {/* <Header/> */}
     <ServiceAddressForm/>
    </div>
  );
}
