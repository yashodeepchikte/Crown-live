import React from "react"
import "./sign-in-sign-up.styles.scss"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"


import {setLodingFalse, setLodingTrue} from "../../redux/loading/loading.actions"
import { connect } from "react-redux"
import  WithLoader from "../../components/with-loading/WithLoading.component"

const SignInWithLoading = WithLoader(SignIn);
const SignUpWithLoading = WithLoader(SignUp);


function SignInSignUp(props){
    // const {setLodingFalse, setLodingTrue, isLoading} = props
    const {isLoading} = props;
    return (
        <div className="sign-in-and-sign-up">
            < SignInWithLoading isLoading= {isLoading}/>
            <SignUpWithLoading isLoading={isLoading}/>
        </div>
    )
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



export default connect(mapStateToProps, mapDispatchToProps)(SignInSignUp)