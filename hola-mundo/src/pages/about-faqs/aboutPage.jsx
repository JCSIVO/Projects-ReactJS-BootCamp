import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); //'/about | /faqs'

    const navigation = (path) => {
        navigate('path');
    }

    //const goBack = () => {
    //    navigate.goBack()
    //}

   //const goForward = () => {
   //     navigate.goForward();
    //}
    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={ () => navigate('/')}> 
                    Go To Home
                </button>
                <button onClick={ () => navigate(-1) }> 
                    Go Back
                </button>
                <button onClick={ () => navigate(1) }> 
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
