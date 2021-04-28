import React from 'react'
import Dropdown from 'react-dropdown'
import {FormControl} from "@material-ui/core"
import {AppBar, TextField, Card} from '@material-ui/core'
import { withStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

const styles = () => ({
    
});



 class BillingAddressForm extends React.Component {
    state = {
        firstName: '',
        lastName:  '',
        address:   '',
        city:      '',
        state:     '',
        zip:       ''
    }

    back = (event) => {
        event.preventDefault();
        this.props.previousView();
      }

    render(){
        const {classes} = this.props;
        return(
            <Card className={classes.card}>
            <FormControl>
                <AppBar title="Enter Billing information"/>
                <TextField
                placeholder="First Name"
                label="First Name"
                />
                <TextField
                placeholder="Last Name"
                label="Last Name"
                />
                <TextField
                placeholder="Address"
                label="Address"
                />
                <TextField
                placeholder="City"
                label="City"
                />
                <TextField
                placeholder="State"
                label="State"
                />
                <TextField
                placeholder="Zip"
                label="Zip"
                />
              
              

              </FormControl>
              </Card>
        )
    }
}

export default withStyles(styles)(BillingAddressForm)