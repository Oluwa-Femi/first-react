import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'
import jokesData from './JokesData'

function App(){
    const jokeComponents = jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            <Header />
            {jokeComponents}
            <ContactCard 
            contact={{name: "Mr. Elvis Onobo", imgURL:"../Desert.jpg", phone: "08039101861", email:"victory.ebhohon@gmail.com"  }} />

            <Footer />
        </div>
    )
}

export default App