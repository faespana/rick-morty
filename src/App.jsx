import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from "./components/ErrorFetch"
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {

    let URL 
    
    if(locationInput){
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true) 
        console.log(err)
      })
  }, [locationInput])

  const handleSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <img className='image' src="src/assets/3307.png" alt="" />
      <h1 className='title'>Rick & Morty Wiki</h1>
      

      <form onSubmit={handleSubmit}>
        <input placeholder='type an id from 1 to 126' id='inputSearch' type="text" />
        <button className='boton'>
          <i class="fa-brands fa-searchengin"></i>
        </button>
      </form>


      {
        hasError ?
          <ErrorFetch/>
        :
        <>
          <LocationInfo location = {location}/>
          
          <div className='residents-container'>
            {
              location?.residents.map(url => (
                <ResidentCard key={url} url={url}/>
              ))
            }
          </div>
        </>
      }
    </div>
  )
}

export default App
