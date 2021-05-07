import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components_login/Dashboard'
import Preferences from './components_login/Preferences'
import React, {useState} from 'react'
import Login from './components_login/Login'

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
function App() {
  const token = getToken();
  if(!token){
    return <Login setToken={setToken}></Login>
  }
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path = "/dashboard">
            <Dashboard>
            </Dashboard>
          </Route>
          <Route path = "/preferences">
            <Preferences>
            </Preferences>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
