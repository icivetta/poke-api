import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

class Pokemon extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombre:"",
            foto: "",
            loading: true,
            types:[]
        }
    }

    componentDidMount() {
        
        fetch(this.props.pokemon.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    nombre: data.name,
                    foto: data.sprites.front_default,
                    loading: false,
                    types: data.types,
                    id: data.id
                })
            })
      }

    render(){
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          
        return(              
            <div > 
                {this.state.loading ? "Loading" : 
                <div className='pokemon'>
                    <Link to={`/pokemon/${this.state.id}`}>
                        <h1 className="nombre-pokemon">{this.state.loading ? "Loading" : capitalizeFirstLetter(this.state.nombre)}</h1> 
                        <img id='foto-pokemon' src={this.state.foto} alt={this.state.nombre}/>
                        <div className='types'>
                            <h3 className={this.state.loading ? "Loading" : this.state.types[0].type.name}>{this.state.loading ? "Loading" : capitalizeFirstLetter(this.state.types[0].type.name)}</h3>
                            {this.state.types[1] && <h3 className={this.state.loading ? "Loading" : this.state.types[1].type.name}> {this.state.loading ? "Loading" : capitalizeFirstLetter(this.state.types[1].type.name)}</h3>}
                        </div>
                    </Link>
                </div>}
            </div>
        )
    }
}

export default Pokemon