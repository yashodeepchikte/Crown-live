import { combineReducers } from "redux"

import storage from "redux-persist/lib/storage" // this storage/cache willbe used to store locally
import userReducer from "./user/user.reducer"
import cartReducer from './cart/cart.reducer'
import directoryReducer from "./directory/directory.reducer"

import { persistReducer } from "redux-persist"
import ShopReducer from "../redux/shop/shop.reducer"
import LodingReducer from "../redux/loading/loading.reducer"

const persistConfig = {
    key: 'root',            // where in our reducer do  we want to store
    storage,

    whitelist: ["cart"]  // a list that specifies which state props we want to persist

}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: ShopReducer,
    loading: LodingReducer
});



export default persistReducer(persistConfig, rootReducer)