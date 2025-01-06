import { configureStore } from "@reduxjs/toolkit";

import tasks from './taskSlice';


const store = configureStore(
    {
        reducer: {
            tasks,
        }
    }
);

export default store;