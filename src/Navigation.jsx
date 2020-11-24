import React from 'react'
import './Navigation.css'

function Navigation ({ nav }) {
  const locations = [1,2,3,4]

  return (
    <div className="nav">
      {
        locations.map(location => {
          return (
            <div>
              <div className={"circle " +  (nav === location ? "circle-current" : "")}></div>
              <div className={"underline " + (nav === location ? "underline-current" : "")}></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Navigation