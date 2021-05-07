import React, {useState} from 'react';

import axios from 'axios';

function App() {

  //0. get the availableBal from API



  //1. define the consts

  const [amount, setAmount] = useState(0);
  const [custId, setCustId] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  
  //2. get custID from login

  const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/account"; 
  const body = { 
    custID: 8, 
    accountKey: "xu4m4b7c-vfb3-tax6-mxr4-9qii6g11fyf", 
  }; 
  const headers = { 
    "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP", 
  }; 
  const data = axios.post(url, body, { headers: headers }).then((res) => { return res.data; }) 
  .catch(error => console.log(error));




  return ( 

    //3. transfer form
    <div className="transferForm">
      <form>
          <h3>Transfer</h3>
          <div className="form-group">
              <label>Customer ID of receiver</label>
              <input type="text" className="form-control" value={receiverId} onChange={(e) => {
                  setReceiverId(e.target.value);
              }} />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input type="number" className="form-control" min="0" value={amount} onChange={(e) => {
                setAmount(e.target.value);
            }} />
       
        </div>
    
        <button class = "btn default">Transfer</button>      
      </form>
    </div>
    
  //4. show receipt of transfer



  )
}

export default App;