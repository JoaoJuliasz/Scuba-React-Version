import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      input: '',
    }
  }
  render() {
    return(
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App;
