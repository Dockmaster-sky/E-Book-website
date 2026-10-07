
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo.jsx";
import Cart from "./Pages/Cart.jsx";
import React, { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([book])
  }

  useEffect(() => {
    console.log()
  })

  return (
    <Router>
      <div className="App">
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
          <Route path="/cart" render={() => <Cart books={books} />} /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
