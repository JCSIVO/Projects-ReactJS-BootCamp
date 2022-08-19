import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    //const location = useLocation();
    const navigate = useNavigate();

    //console.log('We are in Route:', location.pathname); //'/about | /faqs'

    //const navigat = (path) => {
     //   navigate('/path');
   // }

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true', //Query params
            state:{
                online: true
            }
        })
    }


    return (
        <div>
            <h1>
                Home Page
            </h1>
            <div>
            <button onClick={ () => navigateProps('/online-state')}> 
                    Go To Page with State / Query params
                </button>
                <button onClick={ () => navigate('/profile')}> 
                    Go To Profile
                </button>
            </div>
        </div>
    );
}

export default HomePage;
