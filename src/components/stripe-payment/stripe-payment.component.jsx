import React from "react"
import StripeCheckout from 'react-stripe-checkout';
import {Redirect} from "react-router-dom";
import { withRouter } from "react-router-dom";


const publishable_key = "pk_test_k6DrXo2A0R58JDGCpVMzMXJC004LgnOAao";

const onToken = (token) => {console.log("the tocken recieved = ", token)
    alert("Payment successful")
    return (<Redirect to="/"/>)
}

const StripePayment = ({amount}) => {
    return (
        <StripeCheckout 
            name="The Infinity co."
            description={` Your total is ${amount}`}
            pameLabel = "Pay now label"
            image = "https://sendeyo.com/up/d/f3eb2117da"
            label = "Pay Now"
            amount={amount*100}
            currency="INR"
            stripeKey={publishable_key}
            billingAdderss
            shippingAddress
            token={onToken}
        />)
}
export default StripePayment