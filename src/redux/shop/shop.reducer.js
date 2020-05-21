import SHOP_DATA from "./shop.data"

const INITIAL_STATE = {
    SHOP_DATA : SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        default:
            return state
    }
}

export default ShopReducer