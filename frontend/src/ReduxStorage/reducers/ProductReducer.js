import {ALL_PRODUCT_SUCCESS, ALL_PRODUCT_REQUEST, ALL_PRODUCT_FAIL, CLEAR_ERROR} from '../constants/ProductConstants';

export const productReducer = (state = {products : []}, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading : true, 
                products : []
            };
        case ALL_PRODUCT_SUCCESS : 
            return {
                loading : false,
                products : action.payload.products,
                productsCount : action.payload.count,
                totalPages : action.payload.totalPages,
                filteredProductCount : action.payload.filteredProductCount
            };
        case ALL_PRODUCT_FAIL :
            return {
                loading : false,
                error : action.payload
            };
        case CLEAR_ERROR :
            return {
                ...state,
                error : null
            }
        default:
            return state;
    }
};