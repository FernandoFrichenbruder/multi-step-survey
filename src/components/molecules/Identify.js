import React from 'react'

function Identify() {
  return (
    <div className='step'>
        <header>
            <h1>Identify</h1>
        </header>
        <div className='form-section'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" placeholder='Name' name='name' />
            </div>
        
            <div className='form-group'>
                <label>E-mail</label>
                <input type="email" placeholder='E-mail' name='email' />
            </div>
        </div>
    </div>

  )
}

export default Identify