import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'
import jokesData from './JokesData'

function App(){
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            <Header />

            <Footer />
        </div>
    )
}

export default App