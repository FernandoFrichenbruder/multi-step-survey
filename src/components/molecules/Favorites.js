import React from 'react'

function Favorites() {
  return (
    <div className='step'>
        <header>
            <h1>Favorites</h1>
        </header>
        <div className='form-section'>
            <div className='form-group'>
                <label>Favorite Book</label>
                <input type="text" placeholder='Favorite Book' name='favoriteBook' />
            </div>
        
            <div className='form-group'>
                <legend>Favorite Color</legend>

                <input type="checkbox" name="favoriteColor" value="Blue" />
                <label for="favoriteColor">Blue</label>

                <input type="checkbox" name="favoriteColor" value="Black" />
                <label for="favoriteColor">Black</label>
            </div>
        </div>
    </div>
  )
}

export default Favorites