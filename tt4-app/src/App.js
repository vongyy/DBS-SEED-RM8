import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components_login/Dashboard'
import Preferences from './components_login/Preferences'

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path = "/dashboard">
            <Dashboard>
            </Dashboard>
          </Route>
          <Route path = "/dashboard">
            <Preferences>
            </Preferences>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
