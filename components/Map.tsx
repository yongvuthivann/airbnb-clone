import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function Map() {

  const [viewport, setViewport] = useState({
    width:'100%',
    height: '100%',
    longitude: -100,
    latitude: 40,
    zoom: 11
  })

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/vuthivannyong/cl1v1kwc6001d15o9np4u0xh0'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
    >

    </ReactMapGL>
  )
}

export default Map