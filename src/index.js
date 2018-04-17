import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";


//all a reducer is a function that is passed into the storeInstance
const firstReducer = (state=1, action) =>{
    if (action.type === 'BUTTON_ONE') {
        console.log('Hey im a reducer','state: ',state,'action: ',action);  
        return state + 1
    }
    //reducers must return something and that something is called state which is different that react.state
    //redux state is the state of data that lives in the redux store.
    //reducers need to return state that is why an object is used as a place holder here.
    return state
}
const secondReducer = (state=100, action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log('Hey im second reducer','state: ',state,'action: ',action); 
        return state - 1
    }
    return state
}
const elementListReducer = (state=[],action) => {
//     if (action.type === 'ADD_ELEMENT') {
//         console.log(`the element was ${action.payload}`); 
//         return [...state,action.payload ]
//     }
//     return state;//will always be returing some form of state... 
// }
switch (action.type) {
    case 'ADD_ELEMENT' :
        return [...state, action.payload];
    case 'CLEAR_ELEMENT_LIST' :
        return [];
    default:
        return state;
    }
}
//Our Redux Store
const storeInstance = createStore(
    //A reducer runs with every action dispatched
    combineReducers(
        {
            firstReducer,
            secondReducer,
            elementListReducer
        }
    )   
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
