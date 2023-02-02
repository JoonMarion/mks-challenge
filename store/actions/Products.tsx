import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { iApiResponse } from '../../interfaces';
import { setProducts } from '../reducers/Products';

export const fetchProducts = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.get<iApiResponse>(
            'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=ASC'
        );
        const products = response.data.products;
        dispatch(setProducts(products));
    } catch (error) {
        console.error(error);
    }
};
