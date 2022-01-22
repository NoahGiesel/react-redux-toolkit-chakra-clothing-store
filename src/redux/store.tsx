import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./items"

export default configureStore({
    reducer: {
        itemList : itemSlice
    }
})
