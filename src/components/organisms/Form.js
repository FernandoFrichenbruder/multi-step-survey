import React, { useState } from 'react'
import Identify from '../molecules/Identify'
import Details from '../molecules/Details'
import Favorites from '../molecules/Favorites'
import Summary from '../molecules/Summary'

function Form() {

    const [page, setPage] = useState(0);

    const SurveySteps = [<Identify />, <Details />, <Favorites />, <Summary />];

    return (
        <div className='form'>
            <header>
                <p>Some title goes here</p>
            </header>
            <section>
                {SurveySteps[page]}
            </section>
            <footer>

                <button
                    disabled={page === 0}
                    onClick={() => {setPage((currentPage) => currentPage - 1)}}
                >
                    Prev
                </button>

                <button
                    disabled={page === SurveySteps.length -1}
                    onClick={() => {setPage((currentPage) => currentPage + 1)}}
                >
                    Next
                </button>

            </footer>
        </div>
    )
}

export default Form