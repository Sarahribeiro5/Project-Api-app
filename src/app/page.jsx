"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Page() {
  const [jogos, setJogos] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarJogos = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.sampleapis.com/switch/games')
      const data = response.data;
      setJogos(data)
      console.table(data)
    } catch (error) {
      console.error('Erro ao buscar jogos:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h screen bg-blue-100 p-8 text-center">
      <div className="mx-auto text-center mb-12">
        <h1 className="text-center mb-8 font-bold">Jogos</h1>
        <div className="text-center mb-8">
          <div className="mm-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={buscarJogos} disabled={loading}>
              {loading ? "Carregando..." : "Buscar Jogos"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {jogos.map((jogo) => (
          <div className="bg-white p-6 rounded-lg shadow-md" key={jogo.id}>
            <h3 className="font-bold text-lg text-gray-800">{jogo.name}</h3>
            <p className="text-grey-600">Gênero: {jogo.genre}</p>
            <p className="text-grey-600">Desenvolvedores: {jogo.developers}</p>
          </div>
        ))}
      </div>

    </div>
  )
}