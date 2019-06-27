import * as types from './../constants/ActionType';
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (msg) => {
    return {
        type: types.CHANGE_MSG,
        msg
    }
}