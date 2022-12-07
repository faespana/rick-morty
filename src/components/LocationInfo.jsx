import React from 'react'

const LocationInfo = ({location}) => {

  return (
    <div className='article'>
        <h2 className='location'>{location?.name}</h2>
        <ul className='info'>
            <li><span><b>Type:</b> {location?.type}</span></li>
            <li><span><b>Dimension:</b> {location?.dimension}</span></li>
            <li><span><b>Population:</b> {location?.residents.length}</span></li>
        </ul>
    </div>
  )
}

export default LocationInfo