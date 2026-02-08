import React from 'react'
import '../extra-css/header.css'
const header = () => {
  return (
    <div className='header-div'>
      <h1 className='heart' style={{ color: "#d4af37" }}>❤︎</h1>
      <a href="/"><h1 className='h1'>Divine Morsels</h1></a>
      <h5 className='h5'>Unveil a cookie, Uncover a blessing ♰</h5>
    </div>
  )
}

export default header