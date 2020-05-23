import React from "react"

import {SpinnerContainer, SpinnerOverlay } from "./WithLoading.styles"

const WithLoader = ComponentToBeWrapped => {
    const WrappedComponent = ({ isLoading, ...otherProps}) => {
        return isLoading ?
            (
                <SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>
            ) :
            <ComponentToBeWrapped {...otherProps} />
    } 
    return WrappedComponent;
};

export default WithLoader;