  
import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogelSignIn, inverted ,...otherProps }) => (
  <button className= {`custom-button ${isGoogelSignIn ? "google-sign-in " : ""} ${ inverted ? "inverted" : "" }`}  {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
