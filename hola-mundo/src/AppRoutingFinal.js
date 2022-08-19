import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import DashBoardpage from './pages/dashboard/DashBoard';
import NotFoundPage from './pages/404/NotFoundPage';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;
  
  return (
    <Router>
    {/* Router */}
    <Routes>
      {/* Redirections to protect our routes */}
        <Route exact path='/' element= 
        {
          loggedIn ? 
          (<Navigate  to='/dashboard' replace />)
          :
          (<Navigate to='/login' replace />)
        }/>
        <Route exact path='/' />
        {/* Login Route */}
        <Route exact path='/login' element={ < LoginPage />} />
        {/* DashBoard Route */}
        <Route exact path='/dashboard' element={ < DashBoardpage /> } />
        <Route exact path='/dashboard' element= 
        {
          loggedIn ? 
          (<Navigate to='/DashBoardpage' replace />)
          :
          (<Navigate  to='/login' replace />)
        }
        />
        
        <Route element={ < NotFoundPage /> } />
        </Routes>
      </Router>
  );
}

export default AppRoutingFinal;
