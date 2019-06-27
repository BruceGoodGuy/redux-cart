import ActionType from './../constants/ActionType';

let initialState = [
    {
        id: 1,
        name: 'I Phone 7 Plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10,
        rating: 3

    },
    {
        id: 2,
        name: 'I Phone 8 Plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10,
        rating: 4

    },
    {
        id: 3,
        name: 'I Phone 9 Plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10,
        rating: 5

    }
];

const products = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;
