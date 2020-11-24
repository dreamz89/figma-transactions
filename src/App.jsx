import React, { useState } from 'react'
import Account from './Account'
import Navigation from './Navigation'
import './App.css'

function App() {
  const [nav, setNav] = useState(1)

  const amounts = [45, 350, 120]
  const transactions = ['', '', '', '', '', '']

  const handleNavigation = location => setNav(location)

  return (
    <div className="App">
      <img src="profile.png" class="image-profile" alt="profile" />
      <h1>Morning Lee</h1>
      <h3 className="title-account">Your accounts</h3>
      <div className="accounts">
        {
          amounts.map(amount => 
            <Account 
              amount={amount}
              nav={nav}
              handleNavigation={handleNavigation}
            />
          )
        }
      </div>
      <h3 className="title-transactions">Transactions</h3>
      {
        transactions.map(transaction => <div class="row"></div>)
      }
      <Navigation 
        nav={nav} 
        handleNavigation={handleNavigation} 
      />
    </div>
  )
}

export default App
