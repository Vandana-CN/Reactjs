import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "./Feature/postSlice"

export default configureStore({

    reducer:{

        post:PostReducer,

    },

});