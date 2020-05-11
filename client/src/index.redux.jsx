/**
 * @file index.redux.js
 * The parent Redux file that handles state management.
 * 
 */

const Redux = require('redux');

// REDUX - Action Types
const ACTION_SET_USER = 'SET_USER';

// REDUX - Action creators and reducers
function setUser(user = null) {
   return { type: ACTION_SET_USER, user };
}

function userReducer(state = 0, action) {
   switch(action.type) {
       case ACTION_SET_USER:
           console.log(action);
           return action.user;
       default:
           return state;
   }
}

const appReducer = Redux.combineReducers({
   user: userReducer,
})

// REDUX - store
const store = Redux.createStore(appReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   );
   
window.store = store;

// REDUX - END 
module.exports = {
   store,
   setUser,
}
window.vcmsRed = module.exports;