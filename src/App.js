import React, {Component} from 'react'

// import Footer from './components/Footer'
// import Header from './components/Header'
// import ContactCard from './components/ContactCard'
// import Joke from './components/Joke'
// import jokesData from './JokesData'
// import productsData from './productsData'
// import Product from './components/Product'

// function App(){
//     const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
//     const productComponent = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

//     return (
//         <div>
//             <Header />
//             {productComponent}

//             <br />
//             <br />
//             {jokeComponents}
//             <ContactCard 
//             contact={{name: "Mr. Elvis Onobo", imgURL:"../Desert.jpg", phone: "08039101861", email:"victory.ebhohon@gmail.com"  }} />

//             <Footer />
//         </div>
//     )
// }

class App extends Component{
    constructor(){
        super()

        this.state = {
            isLoggedIn: true
        }
    }

    render(){
        return(
            <div>
                <h1>You are currently logged { this.state.isLoggedIn ? "In" : "Out" }</h1>
            </div>
        )
    }
}

export default App