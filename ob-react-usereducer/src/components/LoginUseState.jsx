import React, { useState } from 'react';

const LoginUseState = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
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
            setIsLoggedIn(true);
            setLoading(false);
        } catch (error) {
            setError(`Invalid Username or Password: ${error} `)
            setLoading(false);
            setUsername('');
            setPassword('');
        }
    }
    
    const logout = () => {
        setIsLoggedIn(false);
        setLoading(false)
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
                                onChange={(e) => setUsername(e.currentTarget.value)}></input>
                                <input 
                                type='text' 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}></input>
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

export default LoginUseState;