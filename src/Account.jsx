import React from 'react'
import './Account.css'

function Account ({ 
  amount, 
  index, 
  accountNumber,
  handleExpansion 
}) {
  const left = index * 148

  return (
    <div 
      className={"account " + (accountNumber === index ? "expanded" : "")}
      onClick={() => accountNumber === null && handleExpansion(index)}
      style={{ left: left }}>
      <h4 className="account-text">You're owed</h4>
      <div className="account-main">
        <p className="account-currency">£</p>
        <p className="account-amount">{amount}</p>
      </div>
    <img src="profile.png" class="account-profile" alt="profile" />
    </div>
  )
}

export default Account