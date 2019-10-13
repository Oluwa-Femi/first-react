import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'

function App(){
    return (
        <div>
            <Header />
            <Joke jokes={{ question: "how on Earth do people find it hard to poo?", 
                            punchline: "you would need to as the toilet that!" }} />
            <Joke jokes={{ question: "is there life after death?", 
                            punchline: "only the dead truly know..." }} />
            <Joke jokes={{ question: "", punchline: "You are asking so loud I can't hear you" }} />
            <ContactCard 
            contact={{name: "Mr. Elvis Onobo", imgURL:"../Desert.jpg", phone: "08039101861", email:"victory.ebhohon@gmail.com"  }} />

            <Footer />
        </div>
    )
}

export default App