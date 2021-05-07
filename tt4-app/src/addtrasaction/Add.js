import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    //Running the bottom part
    [theme.breakpoints.up(600 + theme.spacing(4) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    textDecoration: "none",
    justifyContent: "center",
    display: "flex",
  },
}));

const Add = () => {
  const classes = useStyles();

  const [payeeID, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    const url =
      "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add";
    const body = {
      custID: 8,
      accountKey: "xu4m4b7c-vfb3-tax6-mxr4-9qii6g11fyf",
      payeeID: payeeID,
      amount: amount,
      eGift: false,
      message: message,
    };
    const headers = {
      "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP",
    };

    const data = axios.post(url, body, { headers: headers }).then((res) => {
      return res.data;
    });

    console.log(data);

    alert("This works");

    setPayee("");
    setAmount("");
    setMessage("");
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Add Transaction
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitForm}>
          <TextField
            autoFocus
            fullWidth
            required
            variant='outlined'
            type='number'
            id='Payee'
            name='Payee'
            label='Payee'
            margin='normal'
            value={payeeID}
            onChange={(e) => setPayee(e.target.value)}
          />
          <TextField
            autoFocus
            fullWidth
            required
            variant='outlined'
            type='number'
            id='amount'
            name='amount'
            label='Amount'
            margin='normal'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            multiline
            autoFocus
            fullWidth
            required
            variant='outlined'
            type='text'
            id='message'
            name='message'
            label='Message'
            margin='normal'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant='contained'
            fullWidth
            type='submit'
            color='primary'
            className={classes.submit}>
            Transfer
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Add;
