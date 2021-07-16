import React from 'react'
import Pokemon from "./pokemon";
import Pokeball from "./pokeball.png";


class Pokemons extends React.Component{
    constructor(_props){
        super()
        this.state = {
           nextPage: "",
           prevPage:"",
           results: [],
           url:"https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
           pokemonSearchValue:'',
           pokemonList:[]
        }
        this.nextHandle=this.nextHandle.bind(this)
        this.lastHandle=this.lastHandle.bind(this)
        this.searchHandle=this.searchHandle.bind(this)
    }    
    
    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                   nextPage:data.next,
                   prevPage:data.previous,
                   results:data.results
                })
            })
            fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
            .then(response => response.json())
            .then(data => {
                this.setState({
                   pokemonList:data.results
                })
            })
      }

      nextHandle(){
          fetch(this.state.nextPage)
            .then(response => response.json())
            .then(data => {
                this.setState({
                   nextPage:data.next,
                   prevPage:data.previous,
                   results:data.results
                })
            })
      }
      
      lastHandle(){
        fetch(this.state.prevPage)
          .then(response => response.json())
          .then(data => {
              this.setState({
                 nextPage:data.next,
                 prevPage:data.previous,
                 results:data.results
              })
          })
    }

    searchHandle(event){
        const {name, value} = event.target
        
            this.setState({
                [name]: value
            })
        
        
    }
    render(){
        
    const losPokemones = this.state.results.map(pokemon=> <Pokemon key={pokemon.name} pokemon={pokemon}   />)
    const todosLosPokemones = this.state.pokemonList.map(pokemon=> <Pokemon key={pokemon.name} pokemon={pokemon}   />)
        const{pokemonSearchValue} = this.state
        console.log(pokemonSearchValue)
    const filtrados=todosLosPokemones.filter(pokemon =>{
        return pokemon.key.toLowerCase().indexOf(pokemonSearchValue.toLowerCase()) !== -1
    })
    console.log(filtrados)

    return (
        <div className='pokemons-container'>
            <div className="search-bar">
                <input type="text" name='pokemonSearchValue' placeholder='Search for a pokemon...' onChange={this.searchHandle} value={this.state.pokemonSearch}  />
            </div>
            <div className="botones">
                <button onClick={this.lastHandle}>Anterior</button>
                <a onClick={() => window.location.reload(false)} href=""><img id="pokebola" src={Pokeball} alt=""/></a>
                <button onClick={this.nextHandle}>Siguiente</button>
            </div>
            <div className='pokemones'>            
               {pokemonSearchValue ? filtrados : losPokemones}
            </div>
            <div className="botones">
                <button onClick={this.lastHandle}>Anterior</button>
                <img id="pokebola" src={Pokeball} alt=""/>
                <button onClick={this.nextHandle}>Siguiente</button>
            </div>
            
        </div>
         
         ) 
        }   
    
        
    
}
export default Pokemons