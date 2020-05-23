import React from "react"
import FormInput  from "../form-imput/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth, createUserProfileDoc} from "../../firebase/firebase.utilis"

import './sign-up.styles.scss'

import {setLodingFalse, setLodingTrue} from "../../redux/loading/loading.actions"
import { connect } from "react-redux"

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
        // console.log(event.target)
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handelSubmit = async (event) => {
        event.preventDefault()
        // console.log("State = ", this.state)
        this.props.setLodingTrue();

        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword){
            alert("passwords don't match")
            this.props.setLodingFalse();
            this.setState({
                displayName: this.state.displayName,
                email: this.state.email,
                password:"",
                confirmPassword:""
            })
            return 
        }

        try{
            // console.log("email = ", email)
            // console.log("password = ", password)
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, {displayName})
                        .then(() =>{
                            this.props.setLodingFalse();
                            alert("Sign up Successful \n ")
                        })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
        }catch(error){
            this.props.setLodingFalse();
            console.log("error in creating ther user document",error)
            alert(error.message)
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

const mapDispatchToProps = dispatch => {
    return (
        {
            setLodingFalse: () => dispatch(setLodingFalse()),
            setLodingTrue: () => dispatch(setLodingTrue())
        }
    )
}

const mapStateToProps = state => {
    return (
        {
            isLoading: state.loading.isLoading
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)