import { useState } from 'react';

let data = require('../GeoJSON.json')

function DataTable() {
    const [year, setYear] = useState(0)

    return <div className='p-4'>

        <h1 className='text-xl font-semibold'>Data Table</h1>

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



        <table className='table-auto'>

            <thead className='text-left'>
                <tr className='border-b-2'>
                    <th className='border-r-2 px-6 py-3'>Asset Name</th>
                    <th className='border-r-2 px-6 py-3'>Business Category</th>
                    <th className='border-r-2 px-6 py-3'>Lat</th>
                    <th className='border-r-2 px-6 py-3'>Long</th>
                    <th className='px-6 py-3'>Risk Rating</th>
                </tr>
            </thead>
            <tbody>

                {data.filter(geo1 => geo1.Year === year).map((geo, index) => {
                    return (

                        <tr key={index} className='border-b-2'>
                            <td className='border-r-2 px-6 py-3'>{geo['Asset Name']}</td>
                            <td className='border-r-2 px-6 py-3'>{geo['Business Category']}</td>
                            <td className='border-r-2 px-6 py-3'>{geo['Lat']}</td>
                            <td className='border-r-2 px-6 py-3'>{geo['Long']}</td>
                            <td className=' px-6 py-3'>{geo['Risk Rating']}</td>
                        </tr>
                    )
                })}


            </tbody>
        </table>

    </div>
}

export default DataTable