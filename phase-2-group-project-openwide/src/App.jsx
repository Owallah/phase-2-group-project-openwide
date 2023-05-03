import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Playlist from './components/Playlist'
import Navigation from './components/Navigation'
import SongItem from './components/SongItem'

function App() {
  const [playList, setPlayList] = useState([])
  const url = 'https://api.allorigins.win/raw?url=https://openwhyd.org/adrien?format=json&limit=300'

  useEffect(() => {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(result => {setPlayList(result)})
    // .catch(error => console.error(`An error occurred ${error.message}`))
  }, [])
  
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/playlist' element={<Playlist playList={playList} setPlayList={setPlayList} />} />
      <Route path='/about' element={<About />} />
      <Route path='/song/:id' element={<SongItem />} />
      
    </Routes>
    </>
  )
}

export default App
