import { useEffect, useState } from "react";
import './App.css'

function Pokemon () {
    const [pokemon, setPokemon] = useState<any>({});

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(async res => {if(res.status===200){
        }
            const data = await res.json();
            setPokemon(data);
        })
      }, []);

    
    

    return (
        <div className="card">
            <div className="titleName">{pokemon.name}</div>
            <img src={pokemon?.sprites?.front_default} />
            <ul>
                <li>Name: </li>
                <li>Height: {pokemon.height}</li>
                <li>Weight: {pokemon.weight}</li>
                <li>abilities: <ul>{
                    pokemon?.abilities?.map((item:any, index:number)=>{return(<li key={index}>{item.ability.name}</li>)})
                }</ul></li>
            </ul>
        </div>
    );
}


export default Pokemon;