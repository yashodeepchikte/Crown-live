import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-imput/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { signInWithGoogle, auth } from "../../firebase/firebase.utilis"

import {setLodingFalse, setLodingTrue} from "../../redux/loading/loading.actions"
import { connect } from "react-redux"
// import  WithLoader from "../../components/with-loading/WithLoading.component"
// const 
class SignIn extends React.Component{
    constructor(props){
        super(props);
        // const {isLoading, setLodingFalse, setLodingTrue} = props;
        this.state={
            email:"",
            password:""
        }
    }
    handelSubmit = (event)=>{
        this.props.setLodingTrue();
        event.preventDefault();
        const {email, password} = this.state;
        try{
            auth.signInWithEmailAndPassword(email, password)
                .then((userAuth)=>{this.props.setLodingFalse();console.log("User Authentication", userAuth)})
                .catch((err) => {alert(err.message)})
            this.setState({email:"", password:""})

        }catch(error){
            this.props.setLodingFalse();
            alert("Facing some problem in reaching FireBase auth")
            console.log("there was an errot in sining in", error)
        }
        this.setState({email:"", password:""})
    }

    handelChange = (event) => {
        event.preventDefault();
        // console.log(event.target)
        const {name, value} = event.target;
        
        this.setState({  [name] : value  })   // ! the [ ] is not array it the property accessor in js6  
    }

    render(){
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput type="email" value={this.state.email} name="email" onChange={this.handelChange} label="Email"/>
                    <FormInput type="password" value={this.state.password} name="password"  onChange={this.handelChange} label="Password"/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>  
                        <CustomButton  type="button" onClick={signInWithGoogle} isGoogelSignIn={true}>Sign In with Google</CustomButton>  
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);