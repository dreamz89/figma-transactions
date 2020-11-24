import React from 'react'
import './Account.css'

function Account ({ amount, nav, handleNavigation }) {
  return (
    <div className="account">
      <h4>You're owed</h4>
      <div className="account-main">
        <p className="account-currency">£</p>
        <p className="account-amount">{amount}</p>
      </div>
      <img src="profile.png" class="account-profile" alt="profile" />
    </div>
  )
}

export default Account