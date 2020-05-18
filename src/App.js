import React, { Component } from 'react';
import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import {Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component"
import "./App.css"
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { auth,  createUserProfileDoc} from "./firebase/firebase.utilis";

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      currentUser : null
    }
  }

   unsubscribeFromAuth = null; 
  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      }else{
        console.log("Signed out")
        this.setState({
          currentUser:userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signIn" component={SignInSignUp} />
          </Switch>
      </div>
    );
  } 
}

export default App;
