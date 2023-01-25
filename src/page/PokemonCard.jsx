import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeball from '../assets/gifs/pokeball.gif'

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState({})
  const [add, setAdd] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
  }, [id])

  const type2 = pokemon.types?.[1]?.type.name
  const ability2 = pokemon.abilities?.[1]?.ability.name

  return (
    <div className='container__ball'>
      {!add && (
        <div className='pokeball'>
          <img
            onClick={() => setAdd(true)}
            src={pokeball}
           
            alt='pokeball1'
          />
        </div>
      )}

      {add && (
        <div className=''>
          <div
            onClick={() => setAdd(false)}
          ></div>
          <div>
            <div className='pokemon__detail'>
              <p >
              {pokemon.name.toUpperCase()}                
              </p>
              <img
                src={pokemon.sprites?.other.home?.front_default}
                alt='poke'
              />
            </div>
            <div className='detail__container'>
            <div className='detail'>
              <div >
                <h2 >Weight</h2>
                <p >
                  <span >
                    {pokemon.weight}
                  </span>
                </p>
              </div>
              <div>
                <h2 >Height</h2>
                <p >
                  <span >
                    {' '}
                    {pokemon.height}
                  </span>
                </p>
              </div>
              <div>
                <h2 >Type</h2>
                <div >
                  <p>
                    {' '}
                    {pokemon.types?.[0].type.name}
                  </p>
                  <p >
                    {' '}
                    {pokemon.types?.[1]?.type.name ? `${type2}` : ''}
                  </p>
                </div>
              </div>
              <div >
                <h2 >Abilities</h2>
                <div >
                  <p >
                    {' '}
                    {pokemon.abilities?.[0].ability.name}
                  </p>
                  <p>
                    {pokemon.abilities?.[1]?.ability.name ? `${ability2}` : ''}
                  </p>
                </div>
              </div>
            </div>
            <div className='detail'>
              <h2 >Stats</h2>
              <label htmlFor='HP'>HP</label>
              <progress
                id='HP'
                max='150'
                value={pokemon.stats?.[0].base_stat}
              ></progress>
              <p >{pokemon.stats?.[0].base_stat}/150</p>
              <label htmlFor='Atack'>Atack</label>
              <progress
                
                id='Atack'
                max='150'
                value={pokemon.stats?.[1].base_stat}
              >
                {' '}
              </progress>
              <p >{pokemon.stats?.[1].base_stat}/150</p>
              <label htmlFor='Defense'>Defense</label>
              <progress
                
                id='Defense'
                max='150'
                value={pokemon.stats?.[2].base_stat}
              >
                {' '}
              </progress>
              <p >{pokemon.stats?.[2].base_stat}/150</p>
              <label htmlFor='Speed'>Speed</label>
              <progress
                id='Speed'
                max='150'
                value={pokemon.stats?.[5].base_stat}
              >
                {' '}
              </progress>
              <p >{pokemon.stats?.[5].base_stat}/150</p>
            </div>
            </div>
          </div>
          <div >
            <div className='movements'>
             <h2>Movements</h2>
              {pokemon.moves?.map((poke) => (
                <div key={poke.move.name} >
                  <button
                    key={poke.move.name}
                  >
                    {poke.move.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonCard
