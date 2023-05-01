import { useState, useEffect } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Playlist from './components/Playlist'
import Navigation from './components/Navigation'

function App() {
  const [playList, setPlayList] = useState([])
  const url = 'https://cors.iamnd.eu.org/?url=https://openwhyd.org/adrien?format=json&limit=300'

  useEffect(() => {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(result => setPlayList(result))
    .catch(error => console.error(`An error occurred ${error.message}`))
  }, [])
  
  return (
    <>
    <Navigation />
    <Home />
    <Playlist playList={playList} setPlayList={setPlayList} />
    <About />
    </>
  )
}

export default App
