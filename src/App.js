import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";


import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component"
import "./App.css"
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import { auth,  createUserProfileDoc} from "./firebase/firebase.utilis";
import {setCurrentUser} from "./redux/user/user.actions"
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
          <Route path='/signin' render={ () => this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage /> }  />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => (
  {currentUser : user.currentUser}
)

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);