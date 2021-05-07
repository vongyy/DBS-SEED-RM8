import logo from './logo.svg';
import './App.css';
import TransactionHistory from "./transactHistory/transactHistory"
import Accounts from "./components/Accounts"
function App() {
  return (
    <div className="App">
      <Accounts />
      <TransactionHistory />
    </div>
  );
}

export default App;
