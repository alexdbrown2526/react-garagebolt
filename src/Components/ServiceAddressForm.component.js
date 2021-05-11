import React from 'react';
import MapContainer from './MapContainer.component';
import  BillingAddressForm  from './BillingAddressForm.component';
import { Card, Button } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import ThankYouPage from './ThankYouPage.component';


const styles = theme => ({
    card: {
        background: 'white',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px',
        color: 'orange',
        height: 480,
        width: 400,
        padding: '50px 30px',
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }
});


class ServiceAddressForm extends React.Component {
        state = {
                    view: 1,
                    firstName:   '',
                    lastName:    '',
                    phoneNumber: '',
                    email:       '',
                    address:     '',
                    city:        '',
                    state:       '',
                    zip:         '',
                    notes:       ''
                };
    
  
    nextView = () => {
        const { view } = this.state;
        this.setState({
            view: view + 1
        });
        console.log(this.state);
    }

    previousView = () => {
        const { view } = this.state;
        this.setState({
            view: view-1
        });
        console.log(this.state);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }
  
    handleSubmit = (event) => {
        if(this.state.phoneNumber.length !== 10) {
            alert("Invalid Phone Number")
        }
      event.preventDefault();
      console.log(this.state)
    }
  
    render() {
        const {classes} = this.props;
        const { view } = this.state;
        //const { firstName, lastName, phoneNumber, email, address, city, state, zip, notes} = this.state
        //const values = { firstName, lastName, phoneNumber, email, address, city, state, zip, notes} 

        switch(view) { 
            case 1: return (
                <Card className={classes.card}>
                    <h1>Service Address</h1>
                    <form  onSubmit={this.handleSubmit}>
                      <label>
                        <h2 className="secondHeading">Information</h2>
                            <div className="information">
                                <input type="text" className="information-item" required name="firstName" placeholder="First Name*" value={this.state.firstName} onChange={this.handleChange} />
                                <input type="text" className="information-item"required name="lastName" placeholder="Last Name*" value={this.state.lastName}  onChange={this.handleChange} />
                                <input type="number" className="information-item" required name="phoneNumber" placeholder="Phone Number*" value={this.state.phoneNumber}  onChange={this.handleChange} />
                                <input type="email" className="information-item" required name="email" placeholder="Email*" value={this.state.email}  onChange={this.handleChange} />
                            </div>
                        </label>
                            <label>
                                <h2 className="secondHeading">Address</h2>
                                    <div className="address"> 
                                      <input type="text"  required name="address" placeholder="Address*" value={this.state.address} onChange={this.handleChange} />
                                      <input type="text"  required name="city" placeholder="City*" value={this.state.city} onChange={this.handleChange} />
                                      <input type="text"  required name="state" placeholder="State*" value={this.state.state} onChange={this.handleChange} />
                                      <input type="text"  required name="zip" placeholder="Zip*" value={this.state.zip} onChange={this.handleChange} />
                                      <input type="text"  name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleChange} />
                                      <Button variant="contained" onClick={this.nextView}>Next</Button>
                                    </div>  
                             </label>
                    </form>
              </Card>
              
            )
            case 2: return (
                <MapContainer
                nextView={this.nextView}
                previousView={this.previousView}/>
            );
            case 3: return (
                <BillingAddressForm
                nextView={this.nextView}
                previousView={this.previousView}/>
            );
            case 4: return (
                <ThankYouPage/>
            )

             default: <ServiceAddressForm/>
        }

      
    }
  }

  export default withStyles(styles)(ServiceAddressForm)