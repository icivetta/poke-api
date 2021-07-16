import './App.css';
import Pokemon from './Components/pokemon';
import Header from './Components/header';
import Pokemons from './Components/pokemons'
import PokemonDetail from './Components/pokemonDetail'
import Footer from './Components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return(
    <div>
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={Pokemons} />
                <Route path='/pokemon/:id'  component={PokemonDetail} />
            </Switch>
            <Footer />
        </Router>
    </div>
  )

}

export default App;
