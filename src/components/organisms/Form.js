import React, { useState } from 'react'
import Identify from '../molecules/Identify'
import Details from '../molecules/Details'
import Favorites from '../molecules/Favorites'
import Summary from '../molecules/Summary'

function Form() {

    const [page, setPage] = useState(0);

    const SurveyStep = () => {       
        switch ( page ) {
            case 0:
                return <Identify />
            case 1:
                return <Details />
            case 2:
                return <Favorites />
            case 3:
                return <Summary />
            default:
                return <p>Ops, something went wrong</p> //Create some default
        }
    }

    return (
        <div className='form'>
            <header>
                <p>Some title goes here</p>
            </header>
            <section>
                <SurveyStep />
            </section>
            <footer>

                <button
                    disabled={page === 0}
                    onClick={() => {setPage((currentPage) => currentPage - 1)}}
                >
                    Prev
                </button>

                <button
                    disabled={page === 3}
                    onClick={() => {setPage((currentPage) => currentPage + 1)}}
                >
                    Next
                </button>

            </footer>
        </div>
    )
}

export default Form