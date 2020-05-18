  
import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogelSignIn ,...otherProps }) => (
  <button className= {(isGoogelSignIn ? "google-sign-in " : "") + 'custom-button'} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;