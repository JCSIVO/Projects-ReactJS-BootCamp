import React, { useReducer, useContext } from 'react';

//Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const myContext = React.createContext(null);

const Points = () => {

    const state = useContext(myContext);

    return (
        <p>Points: {state.count}</p>
    )
}

const Counter = () => {

    // initial State for Reducer
    const initialState = {
        count: 0
    }

    // Reducer to change State
    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default:
                return state;
        }
    }

    // Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <myContext.Provider value={state}>
        <div>
        {/* <p>Points: {state.count}</p> */}
            <Points />
            <button 
                onClick={
                    () => dispatch({
                        type: INCREMENT,
                        payload: {
                            quantity: 2
                        }
                        })
                } >
                Increment *2
            </button>
            <button 
                onClick={
                    () => dispatch({
                        type: DECREMENT,
                        payload: {
                            quantity: 1
                        }})
                } >
                Decrement
            </button>
            <button 
                onClick={
                    () => dispatch({type: RESET})
                } >
                Reset Counter
            </button>
        </div>
        </myContext.Provider>
        
    );
}

export default Counter;
