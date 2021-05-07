import React from "react";
import "../App.css";

const Account = ({ status }) => {
  return (
    <div className='App'>
      <div className='col-md-12'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-body'>
            <h5>{status.accountName}</h5>
            <p className='card-text'>
              <strong>Account Number</strong>: {status.accountNumber}
              <br />
              <strong>Album</strong>: {status.availableBal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;