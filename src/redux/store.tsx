import { configureStore } from "@reduxjs/toolkit"
import itemListReducer from "./items"

export default configureStore({
    reducer: {
        itemList : itemListReducer
    }
})
