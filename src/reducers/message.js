import * as types from './../constants/ActionType';
import {msg} from './../constants/message';
let initialState = msg.MSG_WELCOME;

const message = (state = initialState, action) =>{
    switch(action.type){
        case types.CHANGE_MSG: state = msg.MSG_ADD_TO_CARD_SUCCESS; return [...state];
        default: return [...state];;
    }
}

export default message;
