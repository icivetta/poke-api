import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Flecha from './flecha.png'
import Spinner from './Spinner.svg'

class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombre:"",
            foto: "",
            loading: true,
            types:[],
            height:'',
            weight:'',
            next:'',
            last:''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    nombre: data.name,
                    foto: data.sprites.front_default,
                    loading: false,
                    types: data.types,
                    height:data.height,
                    weight:data.weight,
                    next: ((data.id)+1),
                    last:((data.id)-1)
                })
            })
      }
      componentDidUpdate() {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    nombre: data.name,
                    foto: data.sprites.front_default,
                    loading: false,
                    types: data.types,
                    height:data.height,
                    weight:data.weight,
                    next: ((data.id)+1),
                    last:((data.id)-1)
                })
            })
      }

    render(){
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

        return(
            <div> 
                {this.state.loading ? <div className='pokemon-detail-container'>
                    
                    <div className='pokemon-detail'>
                    <img className='spinner' src={Spinner} alt="Loading"/>
                    </div>
                </div>
                
                 : 
                <div className='pokemon-detail-container'>
                   
                   <Link to={`/pokemon/${this.state.last}`}><img className='flecha' id='anterior' src={Flecha} alt="Previous"/> </Link> 
                    
                    <div className='pokemon-detail'>
                        <h1 className="nombre-pokemon-detail">{this.state.loading ? "Loading" : capitalizeFirstLetter(this.state.nombre)}</h1> 
                        <img id='foto-pokemon-detail' src={this.state.foto} alt={this.state.nombre}/>
                        <h3>Height: {this.state.height}</h3>
                        <h3>Weight: {this.state.weight}</h3>
                        <div className='types-detail'>
                            <h3 className={this.state.loading ? "Loading" : this.state.types[0].type.name}>{this.state.loading ? "Loading" : capitalizeFirstLetter(this.state.types[0].type.name)}</h3>
                            {this.state.types[1] && <h3 className={this.state.loading ? "Loading" : this.state.types[1].type.name}> {this.state.loading ? "Loading" : capitalizeFirstLetter(this.state.types[1].type.name)}</h3>}
                        </div>
                    </div>
                    
                    <Link to={`/pokemon/${this.state.next}`}><img className='flecha' src={Flecha} alt="Next"/>  </Link>
                    

                </div>
                }
            </div>
        )
    }
}

export default PokemonDetail