import React, { useState } from 'react'
import Account from './Account'
import Navigation from './Navigation'
import './App.css'

function App() {
  const [nav, setNav] = useState(1)
  const [accountNumber, setAccountNumber] = useState(null)
  const [overflow, setOverflow] = useState(false)

  const amounts = [45, 350, 120]
  const transactions = ['', '', '', '', '', '', '']

  const handleExpansion = (index) => {
    if (accountNumber === null) {
      setAccountNumber(index)
      setOverflow(true)
      setNav(2)
    } else {
      setAccountNumber(null)
      setTimeout(() => { // set overflow hidden only after contraction is done
        setOverflow(false)
      }, 500)
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
      <div className={"accounts " + (overflow ? "overflow" : "")}>
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
      <img src="add.svg" alt="add" className={"image-add " + (accountNumber !== null ? "expanded" : "")} />
      <div className={"transactions " + (accountNumber !== null ? "expanded" : "")}>
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
