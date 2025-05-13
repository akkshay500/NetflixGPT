import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice";
import appConfigSlice from "./appConfigSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        appConfig: appConfigSlice,
    }
});

export default appStore;