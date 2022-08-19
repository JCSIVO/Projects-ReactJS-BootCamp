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

const Task = () => {

    // initial State for Reducer
    const initialState = {
        task: ''
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
            <input type='text' placeholder='input Task'></input>
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
            <input type='text' placeholder='input Task'></input>
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
            <input type='text' placeholder='input Task'></input>
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

export default Task;