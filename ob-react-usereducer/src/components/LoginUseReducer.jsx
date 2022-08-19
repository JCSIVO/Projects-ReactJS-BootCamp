import React, { useReducer } from 'react';

// Actions
const FIELD ='FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';


// INITIAL STATE
const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false

}



//Reducer
const loginReducer = (state, action) => {

    switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true
            }
        case ERROR:
            return {
                ...state,
                error: 'Invalid Username or Password',
                isLoading: false,
                isLoggedIn: false,
                username: '',
                password: ''
            }
            case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            break;
    }
}

const LoginUseReducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    // Obtain all variables from state
    const {username, password, error, isLoading, isLoggedIn} = state;

    // Submit 
    const submit = async (e) => {
        e.preventDefault();
        // Dispatch Action:
        dispatch({type: LOGIN})
        try {
            await function login({username, password}) {
                new Promise ((resolve, reject) => {

                    setTimeout(() => {
                        if(username === 'admin' && password === 'admin'){
                            resolve()
                        }else {
                            reject()
                        }
                    }, 2000);
                })
            }
            dispatch({type: SUCCESS})
        } catch (error) {
            dispatch({type: ERROR})
        }
    }

    const logout = () => {
        dispatch({type: LOGOUT})
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>
                                Welcome, {username} !
                            </h1>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ):
                    (
                        <form onSubmit={submit}>
                            {
                                error && <p style={{color: 'tomato'}}>{error}</p>
                            }
                            <input 
                                type='text' 
                                placeholder='Username' 
                                value={username}
                                onChange={(e) =>
                                    dispatch({
                                        type: FIELD, 
                                        fieldName: 'username', 
                                        payload: e.currentTarget.value})
                                    }></input>
                                <input 
                                type='text' 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) =>
                                    dispatch({
                                        type: FIELD, 
                                        fieldName: 'password', 
                                        payload: e.currentTarget.value})
                                    
                                    }></input>
                                <button type='submit'>
                                    {isLoading ? 'Logging...' : 'Login'}
                                </button>
                        </form>
                    )
                }
            </div>
            
        </div>
    );
}

export default LoginUseReducer;
