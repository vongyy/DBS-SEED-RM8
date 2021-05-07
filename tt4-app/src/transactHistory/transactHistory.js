import React from 'react';
import Table from 'react-bootstrap/Table';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';
// import Session from './Session';
// import Navbar from './Navbar';
export default class TransactionHistory extends React.Component {
  state = {
    userTransactions: [],
    overallAverageExpenditure: [],
    userExpenditureSum: [],
    chartData: {},
    users: []
  }

  componentDidMount() {

    const config = {
      headers: {
        'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP',
      }
    };

    const info = {
        custID: 8,
        accountKey: "xu4m4b7c-vfb3-tax6-mxr4-9qii6g11fyf"
    }

    axios.post(`https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts`, info, config)
      .then(res => {
        const users = res.data
        this.setState({ users })
      })

    axios.post(`https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view`,
      info, config)
      .then(res => {
        console.log(res.data)
        const allTransactions = res.data
        let overallAverageExpenditure = [0, 0, 0, 0, 0, 0]
        allTransactions.forEach(transaction => {
          switch(transaction.expenseCat) {
            case "Insurance":
              overallAverageExpenditure[0] += transaction.amount
              break
            case "Transfer":
              overallAverageExpenditure[1] += transaction.amount
              break
            case "Food":
              overallAverageExpenditure[2] += transaction.amount
              break
            case "Entertainment":
              overallAverageExpenditure[3] += transaction.amount
              break
            case "Shopping":
              overallAverageExpenditure[4] += transaction.amount
              break
            default:
              overallAverageExpenditure[5] += transaction.amount
          }
        })
        console.log(overallAverageExpenditure)



        overallAverageExpenditure = overallAverageExpenditure.map(x => x / this.state.users.length);

        this.setState({ overallAverageExpenditure })

        this.setState({ chartData: { 
            labels: ['Insurance', 'Transfer', 'Food', 'Entertainment', 'Shopping', 'Others'],
            datasets: [
              {
                label: 'Expenses',
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                data: overallAverageExpenditure
              }
            ]
          }})
      })
      
  }

  render() {
    return (
      <div>
        <br></br>
        <h1> Transaction History</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
                <th>Is eGift?</th>
                <th>Date</th>
                <th>CustID</th>
                <th>Amount</th>
                <th>PayeeID</th>
                <th>Expenses Category</th>
            </tr>
          </thead>
          <tbody>
          { this.state.overallAverageExpenditure.map(transaction => 
            <tr key={Math.random()}>
                <td>{transaction.eGift? 'Yes' : 'No'}</td>
                <td>{Date(transaction.dateTime)}</td>
                <td>{transaction.custID}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.payeeID}</td>
                <td>{transaction.expenseCat}</td>
              
            </tr>
            )
          }
          </tbody>
        </Table>

        <br />
        <h1>Expenses Breakdown by Category</h1>
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
        <br/>
      </div>
    )
  }
}