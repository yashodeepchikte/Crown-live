// importing Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utilis';

// importing components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import  CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"


// imports related to redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors"

//  importing the selectors
import {selectCartHidden} from "../../redux/cart/cart.selectors"

// importing stylesheet
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {/* <Link className='option' to='/contact'>
        CONTACT
      </Link> */}
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
        {
            hidden ? null : <CartDropdown />
        }
    
  </div>
);



// this code is same as the commented code below just shorter
const mapStateToProps = createStructuredSelector(
  {currentUser : selectCurrentUser,
   hidden : selectCartHidden})       

// const mapStateToProps = (state)=>{
//   return {
//   currentUser : selectCurrentUser(state),
//   hidden : selectCartHidden(state)
// }
// }

export default  connect(mapStateToProps)(Header);