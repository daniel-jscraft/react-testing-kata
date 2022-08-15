// http://localhost:3000/spinner

import * as React from 'react'

function Spinner() {
  return (
    <div data-testid="loading-spinner" className="lds-ripple" aria-label="loading...">
      <div />
      <div />
    </div>
  )
}

export default Spinner
