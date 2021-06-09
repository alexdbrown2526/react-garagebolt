import React from 'react'
import { Card, Button, Checkbox} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

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



 class BillingAddressForm extends React.Component {
     
    state = {
        firstNameBilling: '',
        lastNameBilling:  '',
        addressBilling:   '',
        cityBilling:      '',
        stateBilling:     '',
        zipBilling:       ''
    };


    back = (event) => {
        event.preventDefault();
        this.props.previousView();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.nextView();
        console.log(this.state);
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }  
     


    render(){
        const {classes} = this.props;
        return(
            <Card className={classes.card}>
                <h1>Billing Address</h1>
                  <form>
                      <label>
                        <h2 className="secondHeading">Information</h2>
                            <div className="information">
                                <input type="text" className="information-item" required name="firstNameBilling" placeholder="First Name*" value={this.state.firstNameBilling} onChange={this.handleChange} />
                                <input type="text" className="information-item"required name="lastNameBilling" placeholder="Last Name*" value={this.state.lastNameBilling}  onChange={this.handleChange} />
                                <input type="text"  required name="addressBilling" placeholder="Address*" value={this.state.addressBilling} onChange={this.handleChange} />
                                <input type="text"  required name="cityBilling" placeholder="City*" value={this.state.cityBilling} onChange={this.handleChange} />
                                <input type="text"  required name="stateBilling" placeholder="State*" value={this.state.stateBilling} onChange={this.handleChange} />
                                <input type="number"  required name="zipBilling" placeholder="Zip*" value={this.state.zipBilling} onChange={this.handleChange} />
                                <p>Is your service address also your billing address?</p> <Checkbox labelplace="true" label= "Yes"/>
                                     <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
                            </div>
                        </label>
                    </form>  
            </Card>
        )
    }
}

export default withStyles(styles)(BillingAddressForm)