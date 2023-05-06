import { useState } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';

let data = require('../GeoJSON.json')

function DataMap() {
    const [year, setYear] = useState(0)
    const [tooltip, setTooltip] = useState(false)

    const addTooltip = () => {
        setTooltip(true);
    }

    const removeTooltip = () => {
        setTooltip(false);
    }

    return (<div className='p-4'>

        <h1 className='text-xl font-semibold'>Data Map</h1>

        <h2 className='text-xl'>Select Decade</h2>

        <button
            onClick={() => { setYear(2030) }}
            className='bg-blue-500 py-1 px-2 rounded-md m-1 border-2 border-black text-white hover:bg-blue-600'
        >
            2030
        </button>
        <button
            onClick={() => { setYear(2040) }}
            className='bg-blue-500 py-1 px-2 rounded-md m-1 border-2 border-black text-white hover:bg-blue-600'
        >
            2040
        </button>
        <button
            onClick={() => { setYear(2050) }}
            className='bg-blue-500 py-1 px-2 rounded-md m-1 border-2 border-black text-white hover:bg-blue-600'
        >
            2050
        </button>
        <button
            onClick={() => { setYear(2060) }}
            className='bg-blue-500 py-1 px-2 rounded-md m-1 border-2 border-black text-white hover:bg-blue-600'
        >
            2060
        </button>
        <button
            onClick={() => { setYear(2070) }}
            className='bg-blue-500 py-1 px-2 rounded-md m-1 border-2 border-black text-white hover:bg-blue-600'
        >
            2070
        </button>

        <p>Year Selected: {year}</p>

        <Map
            initialViewState={{
                longitude: -85,
                latitude: 55,
                zoom: 2
            }}
            style={{ width: '500px', height: '300px', margin: '20px' }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1IjoiaW1hZGFobWVkMTAxIiwiYSI6ImNsaDFhMzJhZTBlMW0zcGtjN202eGQyb3UifQ.WO_Bq6uZmr5D-bzggSA_zw"
        >
            <NavigationControl position='bottom-right' />

            {data.filter(geo1 => geo1.Year === year).map((geo, index) => {
                return (
                    <div>

                        <Marker key={index} longitude={geo['Long']} latitude={geo['Lat']} anchor="bottom"><img src="images/icon.png" className='h-10' onMouseEnter={addTooltip} onMouseLeave={removeTooltip} />
                            {tooltip && (
                                <div>{geo['Asset Name']}</div>
                            )}

                        </Marker>
                    </div>
                )
            })
            }

        </Map>

    </div>)
}

export default DataMap