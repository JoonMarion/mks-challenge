import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { iProduct } from '../../interfaces';

const INITIAL_STATE: iProduct[] = [];

const SliceProducts = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        setProducts(state, { payload }: PayloadAction<iProduct[]>) {
            return [...payload];
        },
    },
});

export default SliceProducts.reducer;

export const { setProducts } = SliceProducts.actions;

export const useProducts = (state: any) => {
    return state.products as iProduct[];
};
