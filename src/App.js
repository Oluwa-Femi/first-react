import React, {Component} from 'react'

import TodosData from './TodosData'
import TodoItem from './components/TodoItem'
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

// const todoComponents = TodosData.map(item => <TodoItem key={item.id} item={item.item}   /> )

class App extends Component{
    constructor(){
        super()

        this.state = {
            todos: TodosData
        }
    }

    render(){
        const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item.item}   /> )

        return(
            <div>
                <p>{todoItems}</p>
            </div>         
        )
    }
}


export default App