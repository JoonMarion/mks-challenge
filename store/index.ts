import { configureStore } from '@reduxjs/toolkit';
import SliceProducts from './reducers/Products';


export const store = configureStore({
    reducer: {
        products: SliceProducts,
    },
});

