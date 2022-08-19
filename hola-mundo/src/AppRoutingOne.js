import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TaskPage'
import TaskDetailpage from './pages/tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

  
  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task2',
      description: 'My second Task'
    }
  ]






  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  })

  return (
    <Router>
      <div>
        <aside>
        <Link to='/'>|| HOME |</Link>
        <Link to='/about'>| ABOUT |</Link>
        <Link to='/faqs'>| FAQs |</Link>
        <Link to='/task/1'>| Task 1 |</Link>
        <Link to='/task/2'>| Task 2 |</Link>
        <Link to='/any404'>| Not Existing Route |</Link>
        <Link to='/login'>| Login ||</Link>
        </aside>
          <main>
            <Routes>
              <Route exact path='/' element={ < HomePage /> }></Route>
              <Route exact path='/online-state' element={ < StatePage /> }></Route>
              <Route  path='/login' element={ < LoginPage /> }>
                {/*{
                  logged ? 
                  
                    //alert('Your are logged in Redirecting to home')
                    <Navigate to='/' replace/>
                  
                  : 
                  <Navigate to='/login'  replace/> 
                }*/}
              </Route>
              <Route path="/about" element={< AboutPage />}></Route>
              <Route path="/faqs" element={< AboutPage />}></Route>
              <Route path='/profile' element={ < ProfilePage />}>
                {/*{
                  logged ? 
                  <Navigate to='/profile' replace/>
                  : 
                  
                  //alert('You must be logged in Redirecting to login...')
                  <Navigate to='/login' replace/>
                  
                }*/}
              </Route>
              <Route path='/tasks' element={ < TasksPage />}></Route>
              <Route 
              exact 
              path='/task/:id'
              render ={
                ({match}) => (<TaskDetailpage task={taskList[match.params.id-1]}/>)
              }
              >

              </Route>
              {/* 404 - Page Not Found */}
              <Route path ='*' element={  < NotFoundPage />}></Route>
            </Routes>
          </main>
      </div>
      
    </Router>
  );
}

export default AppRoutingOne;
