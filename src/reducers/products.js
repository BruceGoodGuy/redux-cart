import ActionType from './../constants/ActionType';

let initialState = [
    {
        id: 1,
        name: 'I Phone 7 Plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10

    },
    {
        id: 2,
        name: 'I Phone 7 Plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10

    },
    {
        id: 3,
        name: 'I Phone 7 Plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10

    }
];

const products = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;
