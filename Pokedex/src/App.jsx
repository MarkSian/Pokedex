import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokemonDetail />} />
      </Routes>
    </>
  )
}

export default App
