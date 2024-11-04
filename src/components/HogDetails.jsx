import React from 'react'

function HogDetails({ hog }) {
  const { greased, weight, "highest medal achieved": medal, specialty } = hog
  return (
    <div className="description">
      <strong>{greased ? 'Greased' : 'Not Greased'}</strong>
      <p>
        Highest medal achived: <strong>{medal}</strong>
      </p>
      <p>
        {specialty}
      </p>
      <p>
         <strong>{weight}</strong>
      </p>

    </div>
  )
}

export default HogDetails;