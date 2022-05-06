import React from 'react'

function Details() {
  return (
    <div className='step'>
        <header>
            <h1>Details</h1>
        </header>
        <div className='form-section'>
            <div className='form-group'>
                <label>Age</label>
                <select name='age'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
            </div>
        
            <div className='form-group'>
                <legend>Gender</legend>
                <input type="radio" name="gender" value="Male" id='male' />
                <label for='male'>Male</label>
                <input type="radio" name="gender" value="Female" id='female' />
                <label for='female'>Female</label>
            </div>
        </div>
    </div>
  )
}

export default Details