import logo from './logo.svg';
import './App.css';

import Navbar from './navbar/navbar';
import TransactionHistory from "./transactHistory/transactHistory"
import Accounts from "./components/Accounts"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Accounts />
      <TransactionHistory />
    </div>
  );
}

export default App;
