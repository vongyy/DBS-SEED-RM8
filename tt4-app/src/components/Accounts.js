import React, { useState, useEffect } from "react";
import Account from "./Account";
import axios from "axios";

const Accounts = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const url =
      "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts";
    const body = {
      custID: 8,
      accountKey: "xu4m4b7c-vfb3-tax6-mxr4-9qii6g11fyf",
    };
    const headers = {
      "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP",
    };

    const data = axios.post(url, body, { headers: headers }).then((res) => {
      setState(res.data);
    });

    console.log(state);
  }, []);

  return (
    <div className='row'>
      {state.map((item, index) => (
        <Account key={index} status={item} />
      ))}
    </div>
  );
};

export default Accounts;