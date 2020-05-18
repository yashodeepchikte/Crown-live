import React from "react"
import FormInput  from "../form-imput/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth, createUserProfileDoc} from "../../firebase/firebase.utilis"

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleChange = (event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handelSubmit = async (event) => {
        event.preventDefault()
        // console.log("State = ", this.state)

        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword){
            alert("passwords dont match")
        }

        try{
            // console.log("email = ", email)
            // console.log("password = ", password)
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, {displayName})
            this.state = {
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            }
        }catch(error){
            console.log("error in creatinf ther user document",error)
        }

    }


    render()
    {
        return(
            <div className="sign-up">
                <h1> I do not have an account </h1>
                <span> Sign up with email and passsword</span>
                <form onSubmit = {this.handelSubmit} className="sign-up-form">
                    <FormInput 
                        handleChange = {this.handleChange}
                        name = "displayName"
                        type = "text"
                        value = {this.state.displayName}
                        label = "Display Name"

                    />
                    <FormInput 
                        handleChange = {this.handleChange}
                        name = "email"
                        type = "email"
                        value = {this.state.email}
                        label = "Email"
                    />
                    <FormInput 
                        handleChange = {this.handleChange}
                        name = "password"
                        type = "password"
                        value = {this.state.password}
                        label = "Password"
                    />
                    <FormInput 
                        handleChange = {this.handleChange}
                        name = "confirmPassword"
                        type = "password"
                        value = {this.state.confirmPassword}
                        label = "Confirm - Password"
                    />

                    <CustomButton onClick = {this.handelSubmit}>Sign Up</CustomButton>
                </form>
          </div>
        )
    }
}

export default SignUp