import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Pokedex from './page/Pokedex'
import PokedexDetails from './page/PokemonCard'
import ProtectedRoutes from './page/ProtectedRoutes'

import { useState } from 'react'
import PokemonCard from './page/PokemonCard'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div >
      <HashRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/pokedex'
              element={
                <Pokedex isVisible={isVisible} setIsVisible={setIsVisible} />
              }
            />
            <Route path='/pokedex/:id' element={<PokemonCard />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
