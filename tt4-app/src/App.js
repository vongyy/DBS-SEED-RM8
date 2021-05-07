import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components_login/Dashboard'
import Preferences from './components_login/Preferences'
import React, {useState} from 'react'
import Login from './components_login/Login'

function App() {
  const [token, setToken] = useState();
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
