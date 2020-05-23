const InitialState = {
    isLoading: false
}

const LodingReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SET_LOADING_FALSE":
            return {
                ...state,
                isLoading:false
            }
        case "SET_LOADING_TRUE":
            return {
                ...state,
                isLoading:true
            }
        default:
            return state
    }

}

export default LodingReducer