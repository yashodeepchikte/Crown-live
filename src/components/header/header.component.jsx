// importing Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { auth } from '../../firebase/firebase.utilis';

// importing components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import  CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"


// importing stylesheet
import './header.styles.scss';

const Header = ({ currentUser, hidden, itemCount }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon itemCount={itemCount}/>
    </div>
        {
            hidden ? null : <CartDropdown />
        }
    
  </div>
);

const mapStateToProps = (state)=>{

  const cartItems = state.cart.cartItems;
  var itemCount = 0;
  cartItems.forEach(cartItem => {
    itemCount += cartItem.count
  })
  return {
  currentUser : state.user.currentUser,
  hidden : state.cart.hidden,
  itemCount:itemCount
}
}

export default  connect(mapStateToProps)(Header);