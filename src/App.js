import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import ContactCard from './components/ContactCard'

function App(){
    return (
        <div>
            <Header />
            <ContactCard 
            name="Mr. Vitory Ebhohon" 
            imgURL="../Desert.jpg" 
            phone="08039101861" 
            email="victory.ebhohon@gmail.com" />
            
            <ContactCard />
            <ContactCard />
            <Footer />
        </div>
    );
}

export default App;