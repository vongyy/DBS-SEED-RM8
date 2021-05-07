import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
export const Context = createContext();

export const ContextController = ({ children }) => {
  let initialState = {
    track_list: [],
    heading: "",
  };

  const [state, setState] = useState(initialState);

    handleChange = event =>{
        axios({
            method: "POST",
            url: "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP"
            },
            body: {
                custID: 8,
                accountKey: "xu4m4b7c-vfb3-tax6-mxr4-9qii6g11fyf"
            },
        })
        .then(res => {
            console.log("res", res.data.payload[0].amount);
        })
        .catch(err => {
            console.log("error in request", err);
        });
    }
  useEffect(() => {
    axios({
        method: "POST",
        url: "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP"
        },
        body: {
            custID: 8,
            accountKey: "xu4m4b7c-vfb3-tax6-mxr4-9qii6g11fyf"
        },
      })
      .then(res => {
        console.log("res", res.data.payload[0].amount);
      })
      .catch(err => {
        console.log("error in request", err);
      });
  }, []);

  return (
    //<Context.Provider value={[state, setState]}>{children}</Context.Provider>
    <Button variant="contained" color="secondary">
        Secondary
    </Button>
  );
};

export default TransactHistory;
