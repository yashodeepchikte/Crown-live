// importing the libaries
import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import {Switch, Route, Redirect} from "react-router-dom";
import { auth,  createUserProfileDoc} from "./firebase/firebase.utilis";

// importing the components
import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component"
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import {setCurrentUser} from "./redux/user/user.actions"
import CheckOutPage from "./pages/checkout/checkoutPage.component"
// importing the stylesheet
import "./App.css"

// imports related to redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
// importing redux selectors
import {selectCurrentUser} from "./redux/user/user.selectors"

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
//  the auth library will always listen for atate changes eveb if the  component is unmounted 
// the auth.onAuthStateChange is a subscription returns a function that can be called to stop teh subscriotion
// and here we have assigned it to the unsubscribeFromAuth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // alert("Auth state changed")
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      console.log("User Authentication = ", userAuth)
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    alert("Component will unmount triggred")
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/signin' render={ () => this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage /> }  />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps =createStructuredSelector (
  {currentUser : selectCurrentUser}
)

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);