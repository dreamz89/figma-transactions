import React, { useState } from 'react'
import Account from './Account'
import Navigation from './Navigation'
import './App.css'

function App() {
  const [nav, setNav] = useState(1)
  const [accountNumber, setAccountNumber] = useState(null)
  const [expanded, setExpanded] = useState(false)

  const amounts = [45, 350, 120]
  const transactions = ['', '', '', '', '', '', '']

  const handleExpansion = (index) => {
    if (accountNumber === null) {
      setAccountNumber(index)
      setExpanded(true)
      setNav(2)
    } else {
      setAccountNumber(null)
      setExpanded(false)
      setNav(1)
    }
  }

  return (
    <div className="App">
      <div className="top-nav">
        <img src="back.svg" alt="back" className="image-back" onClick={() => handleExpansion(null)} />
        <img src="profile.png" alt="profile" className="image-profile"  />
      </div>
      <h1>Morning Lee</h1>
      <h3 className="title-account">Your accounts</h3>
      <div className={"accounts " + (expanded ? "expanded" : "")}>
        {
          amounts.map((amount, index) => (
            <Account 
              amount={amount}
              index={index}
              accountNumber={accountNumber}
              handleExpansion={handleExpansion}
            />
          ))
        }
      </div>
      <img src="add.svg" alt="add" className={"image-add " + (expanded ? "expanded" : "")} />
      <div className={"transactions " + (expanded ? "expanded" : "")}>
        <h3 className="title-transactions">Transactions</h3>
        {
          transactions.map(() => <div class="row"></div>)
        }
      </div>
      <Navigation nav={nav} />
    </div>
  )
}

export default App
