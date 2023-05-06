import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js/auto'

ChartJS.register(
    BarElement, 
    CategoryScale, 
    LinearScale, 
    Tooltip, 
    Legend
    )

// let data1 = require('../GeoJSON.json')


function DataGraph() {
    const data = {

        labels: [2030, 2040, 2050, 2060, 2070],
        datasets: [

            {
                label: '369',
                data: [3, 6, 9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: '333',
                data: [3, 3, 3],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
            },   
        ]
    }

    const options = {}

    return <div className='p-4'>
        <h1 className='text-xl font-semibold'>Data Graph</h1>

        <Line data={data} options={options}/>

    </div>
}

export default DataGraph