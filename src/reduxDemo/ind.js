//@ts-nocheck

import { createStore } from "redux";

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOKED = "CAKE_RESTOKED";

 function orderCake() {
    return ({
        type: CAKE_ORDERED,
        payload: 1
    })
}
 function restokeCake(qty=1) {
    return ({
        type: CAKE_RESTOKED,
        payload: qty
    })
}

const initialState = {
    numOfCakes: 10,
};

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
            case CAKE_RESTOKED:   
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unSubscribe = store.subscribe(() => console.log("updated state", store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restokeCake(3));

unSubscribe();