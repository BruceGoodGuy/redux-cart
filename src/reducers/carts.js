import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ? data: [];

const carts = (state = initialState, action) =>{
    switch(action.type){
        case types.ADD_TO_CART:
            let index = findProductInCart(state, action.product);
            if(index !== -1){
                ++state[index].quantity;
            }else{
                state.push({
                    product: action.product,
                    quantity: action.quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (state, product) => {
    var index = -1;
    if(state.length > 0){
        for(var i = 0; i < state.length; i++){
            if(state[i].product.id === product.id){
                index = i; 
            }
        }
    }
    return index;
}

export default carts;
